import { useState } from "react";
import { useNavigate } from "react-router-dom";

const videoTypes = ["REELS", "YOUTUBE", "PODCAST", "ADs"];
const editingCategories = ["Basic", "Standard", "Advanced", "Premium"];

/* ================= PRICING RULES ================= */
const pricingRules = {
  REELS: {
    Basic: { "1-10": 600, "11-20": 500, "21+": 450 },
    Standard: { "1-10": 1000, "11-20": 850, "21+": 750 },
    Advanced: { "1-10": 1500, "11-20": 1350, "21+": 1200 },
    Premium: { "1-10": 2500, "11-20": 2300, "21+": 2200 }
  },
  ADs: {
    Basic: { "1-10": 600, "11-20": 500, "21+": 450 },
    Standard: { "1-10": 1000, "11-20": 850, "21+": 750 },
    Advanced: { "1-10": 1500, "11-20": 1350, "21+": 1200 },
    Premium: { "1-10": 2500, "11-20": 2300, "21+": 2200 }
  }
};

const API_URL = import.meta.env.VITE_BACKEND_URL;

const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const validatePhone = (phone) => /^[6-9]\d{9}$/.test(phone);

const getTierPrice = (videoType, category, count) => {
  const rules = pricingRules[videoType]?.[category];
  if (!rules) return null;
  if (count <= 10) return rules["1-10"];
  if (count <= 20) return rules["11-20"];
  return rules["21+"];
};

const getCategoriesByVideoType = (videoType) => {
  if (videoType === "ADs") {
    return ["Standard", "Advanced", "Premium"]; // remove Basic for Ads
  }
  return editingCategories;
};


export default function ResometaVideoServiceWizardPopup({ onClose }) {
  const navigate = useNavigate();

  const [step, setStep] = useState(1);
  const [selectedVideos, setSelectedVideos] = useState([]);
  const [videoData, setVideoData] = useState({});
  const [user, setUser] = useState({ name: "", email: "", phone: "" });
  const [breakdown, setBreakdown] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [fieldErrors, setFieldErrors] = useState({
    name: "",
    email: "",
    phone: ""
  });

  const [finalMessage, setFinalMessage] = useState("");
  const [customQuotation, setCustomQuotation] = useState(false);

  const toggleVideoType = (type) => {
    setSelectedVideos((prev) =>
      prev.includes(type)
        ? prev.filter((v) => v !== type)
        : [...prev, type]
    );

    if (!videoData[type]) {
      setVideoData((prev) => ({
        ...prev,
        [type]: [{ category: "", count: 1 }]
      }));
    }
  };

  const handleCategoryChange = (videoType, index, field, value) => {
    if (videoType === "ADs" && value === "Basic") return;

    const updated = [...videoData[videoType]];
    updated[index][field] = value;

    setVideoData((prev) => ({
      ...prev,
      [videoType]: updated
    }));
    setError("");
  };

  const addCategoryRow = (videoType) => {
    setVideoData((prev) => ({
      ...prev,
      [videoType]: [...prev[videoType], { category: "", count: 1 }]
    }));
  };

  const removeCategoryRow = (videoType, index) => {
    const updated = videoData[videoType].filter((_, i) => i !== index);
    setVideoData((prev) => ({
      ...prev,
      [videoType]: updated
    }));
  };

  /* ================= VALIDATION ================= */
  const validateStep = () => {
    if (step === 1 && selectedVideos.length === 0)
      return "Please select at least one video type.";

    if (step === 2) {
      for (let v of selectedVideos) {
        for (let row of videoData[v]) {
          if (!row.category)
            return `Please select category for all ${v} videos.`;
        }
      }
    }

    if (step === 3) {
      let errors = { name: "", email: "", phone: "" };

      if (!user.name || user.name.length < 2)
        errors.name = "Please enter a valid name";
      if (!validateEmail(user.email))
        errors.email = "Please enter a valid email";
      if (!validatePhone(user.phone))
        errors.phone = "Please enter a valid phone number";

      setFieldErrors(errors);

      // ❌ Do NOT show generic error
      if (errors.name || errors.email || errors.phone)
        return "__BLOCK__";
    }

    return "";
  };

  const goToNextStep = (nextStep) => {
    const err = validateStep();

    if (err === "__BLOCK__") return;
    if (err) return setError(err);

    setError("");
    setStep(nextStep);
  };

  const calculatePrice = async () => {
    const err = validateStep();

    if (err === "__BLOCK__") return;
    if (err) return setError(err);

    setError("");

    let totalAmount = 0;
    let breakdownArr = [];
    let customFlag = false;

    selectedVideos.forEach((videoType) => {
      videoData[videoType].forEach((item) => {
        const pricePerVideo = getTierPrice(videoType, item.category, item.count);

        if (!pricePerVideo) {
          customFlag = true;
          breakdownArr.push({ videoType, ...item, custom: true });
        } else {
          const subtotal = pricePerVideo * item.count;
          totalAmount += subtotal -1; // -1 to create a psychological pricing effect
          breakdownArr.push({ videoType, ...item, pricePerVideo, subtotal });
        }
      });
    });

    setCustomQuotation(customFlag);
    setBreakdown(breakdownArr);
    setTotal(totalAmount);

    await sendData("view-price", breakdownArr, totalAmount, null);
    setStep(4);
  };

  const sendData = async (mode, breakdownData, totalAmount, satisfiedValue) => {
    setLoading(true);

    await fetch(`${API_URL}/video-editing-quotation`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        service: "video-editing",
        videos: videoData,
        breakdown: breakdownData,
        total: totalAmount,
        user,
        satisfied: satisfiedValue,
        mode,
        timestamp: new Date().toISOString()
      })
    });

    setLoading(false);
  };

  return (
    <div className="ResometaVideoServiceWizard_modal">
      <div className="ResometaVideoServiceWizard_card">
        <button className="ResometaVideoServiceWizard_close" onClick={onClose}>✖</button>
        <h3 className="ResometaVideoServiceWizard_heading">TELL US ABOUT YOUR VIDEO REQUIREMENTS</h3>

        {error && <p className="ResometaVideoServiceWizard_error">{error}</p>}

        {/* STEP 1 */}
        {step === 1 && (
          <>
            <h5 className="mb-4">Select Video Type</h5>
            <div className="ResometaVideoServiceWizard_grid">
              {videoTypes.map((v) => (
                <label key={v} className={`ResometaCheckbox ${selectedVideos.includes(v) ? "checked" : ""}`}>
                  <input type="checkbox" checked={selectedVideos.includes(v)} onChange={() => toggleVideoType(v)} />
                  <span className="checkmark"></span>
                  {v}
                </label>
              ))}
            </div>
            <button onClick={() => goToNextStep(2)} className="ResometaVideoServiceWizard_btn">Continue</button>
          </>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <>
            {selectedVideos.map((videoType) => (
              <div key={videoType} className="ResometaVideoServiceWizard_block">
                <h4>{videoType}</h4>

                {videoData[videoType].map((row, i) => (
                  <div key={i} className="ResometaVideoServiceWizard_row">
                    <select
                      className="ResometaSelect"
                      value={row.category}
                      onChange={(e) => handleCategoryChange(videoType, i, "category", e.target.value)}
                    >
                      <option value="" disabled>Select Category</option>
                      {getCategoriesByVideoType(videoType).map((cat) => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}

                    </select>

                    <div className="ResometaRowActions">
                      <div className="ResometaQtyControl">
                        <button disabled={row.count <= 1} onClick={() => handleCategoryChange(videoType, i, "count", row.count - 1)}>−</button>
                        <input type="number" value={row.count} onChange={(e) => handleCategoryChange(videoType, i, "count", Math.max(1, Number(e.target.value)))} />
                        <button onClick={() => handleCategoryChange(videoType, i, "count", row.count + 1)}>+</button>
                      </div>
                      <button className="ResometaDeleteBtn" onClick={() => removeCategoryRow(videoType, i)}>🗑</button>
                    </div>
                  </div>
                ))}

                <button className="ResometaVideoServiceWizard_addBtn" onClick={() => addCategoryRow(videoType)}>➕ Add Category</button>
              </div>
            ))}
            <button onClick={() => goToNextStep(3)} className="ResometaVideoServiceWizard_btn">Continue</button>
          </>
        )}

        {/* STEP 3 */}
        {step === 3 && (
          <div className="ResometaUserForm">
            {["name", "email", "phone"].map((field) => (
              <div key={field} className="ResometaInputGroup">
                <label>{field.toUpperCase()}</label>
                <input
                  type={field === "email" ? "email" : field === "phone" ? "tel" : "text"}
                  value={user[field]}
                  onChange={(e) => setUser({ ...user, [field]: e.target.value })}
                />
                {fieldErrors[field] && <span className="ResometaFieldError">{fieldErrors[field]}</span>}
              </div>
            ))}
            <button onClick={calculatePrice} className="ResometaVideoServiceWizard_btn">View Price</button>
          </div>
        )}

        {/* STEP 4 */}
        {step === 4 && (
          <>
            <h3>PRICE BREAKDOWN</h3>

            {breakdown.map((b, i) => (
              <div key={i} className="ResometaVideoServiceWizard_breakdown">
                {b.videoType} - {b.category} for {b.count} video(s) =
                {b.custom ? " Custom Quotation" : ` ₹${b.subtotal - 1}`}
              </div>
            ))}

            {customQuotation && (
              <p className="ResometaVideoServiceWizard_error">
                Our team will reach out for custom quotation.
              </p>
            )}

            <h3>Total: ₹{total}</h3>

            {/* Show buttons only if no final message */}
{!finalMessage && (
  <div className="ResometaVideoServiceWizard_actions mb-3">
    <button
      className="ResometaVideoServiceWizard_btn success"
      onClick={async () => {
        await sendData("final", breakdown, total, true);
        navigate("/services/thankyou", { state: { service: "Video Editing" } });
      }}
    >
      Yes, Proceed!
    </button>

    <button
      className="ResometaVideoServiceWizard_btn danger"
      onClick={async () => {
        await sendData("final", breakdown, total, false);
        setFinalMessage("Our team will reach out for negotiation.");
      }}
    >
      No, I am not Satisfied!
    </button>
  </div>
)}


            {finalMessage && (
              <div className="ResometaVideoServiceWizard_error">
                {finalMessage}
                <br /><br />
                <button
                  className="ResometaVideoServiceWizard_btn"
                  onClick={() => navigate("/services/thankyou", { state: { service: "Video Editing" } })}
                >
                  OK
                </button>
              </div>
            )}
          </>
        )}

        {loading && <p className="ResometaVideoServiceWizard_loading mt-2">Saving...</p>}
      </div>
    </div>
  );
}
