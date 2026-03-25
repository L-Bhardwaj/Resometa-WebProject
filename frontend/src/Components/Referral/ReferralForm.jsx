import { useState } from "react";

const SERVICES = ["Social Media Marketing", "Digital Marketing", "Lead Generation", "Video Editing", "Branding", "Website Development"];

const empty = {
  referrerName: "",
  referrerPhone: "",
  referrerEmail: "",
  refBusinessName: "",
  refContactName: "",
  refContactPhone: "",
  refContactEmail: "",
  services: [],
  message: "",
  terms: false,
};

export default function ReferralForm() {
  const [form, setForm] = useState(empty);
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [saving, setSaving] = useState(false);

  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:4000";

  function validate() {
    const e = {};
    if (!form.referrerName.trim()) e.referrerName = "Your name is required";
    if (!/^(\+?\d{1,3}[- ]?)?\d{7,15}$/.test(form.referrerPhone)) e.referrerPhone = "Enter a valid phone number";
    if (form.referrerEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.referrerEmail)) e.referrerEmail = "Enter a valid email";
    if (!form.refBusinessName.trim()) e.refBusinessName = "Referred business name is required";
    if (!form.refContactName.trim()) e.refContactName = "Contact person name is required";
    if (!/^(\+?\d{1,3}[- ]?)?\d{7,15}$/.test(form.refContactPhone)) e.refContactPhone = "Enter a valid phone number";
    if (form.refContactEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.refContactEmail)) e.refContactEmail = "Enter a valid email";
    if (!form.services.length) e.services = "Select at least one service";
    if (!form.terms) e.terms = "You must accept the terms";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
    setErrors((p) => ({ ...p, [name]: "" }));
  };

  const toggleService = (s) => {
    setForm((p) => ({
      ...p,
      services: p.services.includes(s)
        ? p.services.filter((x) => x !== s)
        : [...p.services, s],
    }));
    setErrors((p) => ({ ...p, services: "" }));
  };

  const handleTerms = () => {
    setForm((p) => ({ ...p, terms: !p.terms }));
    setErrors((p) => ({ ...p, terms: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) {
      setSubmitError(true);
      setTimeout(() => setSubmitError(false), 3000);
      return;
    }
    setSaving(true);
    try {
      await fetch(`${BACKEND_URL}/referral`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setSaving(false);
      setSuccess(true);
      setForm(empty);
      setErrors({});
      setTimeout(() => setSuccess(false), 5000);
    } catch (err) {
      console.error(err);
      setSaving(false);
      setSubmitError(true);
      setTimeout(() => setSubmitError(false), 3000);
    }
  };

  return (
    <section className="ref-form-section" id="referral-form">
      <div className="container">
        <div className="ref-section-header">
          <span className="ref-section-tag">Refer &amp; Earn</span>
          <h2 className="ref-section-title">
            Submit Your <span className="ref-accent">Referral</span>
          </h2>
          <p className="ref-section-subtitle">
            Fill in your details and the business you're referring. Our team will take it from there.
          </p>
        </div>

        <div className="ref-form-wrapper">
          <div className="ref-form-card">

            {success && (
              <div className="alert success">
                <span className="check-icon"><i className="fa-solid fa-check" /></span>
                <p className="text-center">Referral submitted successfully! We'll be in touch soon.</p>
              </div>
            )}

            {submitError && (
              <div className="alert error">
                <span className="cross-icon"><i className="fa-solid fa-xmark" /></span>
                <p className="text-center">Please fill in all required fields.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="form" noValidate>

              {/* ── YOUR DETAILS ── */}
              <div className="ref-form-group-header">
                <i className="fa-solid fa-user ref-form-group-icon" />
                <span>Your Details</span>
              </div>

              <div className="row row-cols-md-2 row-cols-1 g-3">
                <div className="col">
                  <input
                    type="text"
                    name="referrerName"
                    placeholder="Your Full Name *"
                    value={form.referrerName}
                    onChange={handleChange}
                  />
                  {errors.referrerName && <p className="input-error">{errors.referrerName}</p>}
                </div>
                <div className="col">
                  <input
                    type="text"
                    name="referrerPhone"
                    placeholder="Your Phone Number *"
                    value={form.referrerPhone}
                    onChange={handleChange}
                  />
                  {errors.referrerPhone && <p className="input-error">{errors.referrerPhone}</p>}
                </div>
              </div>

              <div className="row row-cols-1 g-3">
                <div className="col">
                  <input
                    type="email"
                    name="referrerEmail"
                    placeholder="Your Email Address (optional)"
                    value={form.referrerEmail}
                    onChange={handleChange}
                  />
                  {errors.referrerEmail && <p className="input-error">{errors.referrerEmail}</p>}
                </div>
              </div>

              {/* ── REFERRED BUSINESS DETAILS ── */}
              <div className="ref-form-group-header" style={{ marginTop: "28px" }}>
                <i className="fa-solid fa-building ref-form-group-icon" />
                <span>Referred Business Details</span>
              </div>

              <div className="row row-cols-md-2 row-cols-1 g-3">
                <div className="col">
                  <input
                    type="text"
                    name="refBusinessName"
                    placeholder="Business Name *"
                    value={form.refBusinessName}
                    onChange={handleChange}
                  />
                  {errors.refBusinessName && <p className="input-error">{errors.refBusinessName}</p>}
                </div>
                <div className="col">
                  <input
                    type="text"
                    name="refContactName"
                    placeholder="Contact Person Name *"
                    value={form.refContactName}
                    onChange={handleChange}
                  />
                  {errors.refContactName && <p className="input-error">{errors.refContactName}</p>}
                </div>
              </div>

              <div className="row row-cols-md-2 row-cols-1 g-3">
                <div className="col">
                  <input
                    type="text"
                    name="refContactPhone"
                    placeholder="Contact Phone Number *"
                    value={form.refContactPhone}
                    onChange={handleChange}
                  />
                  {errors.refContactPhone && <p className="input-error">{errors.refContactPhone}</p>}
                </div>
                <div className="col">
                  <input
                    type="email"
                    name="refContactEmail"
                    placeholder="Contact Email Address (optional)"
                    value={form.refContactEmail}
                    onChange={handleChange}
                  />
                  {errors.refContactEmail && <p className="input-error">{errors.refContactEmail}</p>}
                </div>
              </div>

              {/* ── SERVICES ── */}
              <div className="row row-cols-1 g-3" style={{ marginTop: "4px" }}>
                <div className="col">
                  <h5 className="service-heading">Services They Need *</h5>
                  <div className="services-box">
                    {SERVICES.map((s) => (
                      <label key={s} className="service-item">
                        <input
                          type="checkbox"
                          checked={form.services.includes(s)}
                          onChange={() => toggleService(s)}
                        />
                        <span className="custom-checkbox" />
                        {s}
                      </label>
                    ))}
                  </div>
                  {errors.services && <p className="input-error">{errors.services}</p>}
                </div>
              </div>

              {/* ── MESSAGE ── */}
              <textarea
                name="message"
                rows="4"
                placeholder="Additional notes (optional)"
                value={form.message}
                onChange={handleChange}
              />

              {/* ── TERMS ── */}
              <div className="ref-terms-row">
                <input
                  type="checkbox"
                  id="ref-terms"
                  checked={form.terms}
                  onChange={handleTerms}
                />
                <label htmlFor="ref-terms">
                  I have read and agree to the{" "}
                  <a href="#terms-conditions" className="ref-terms-link">
                    Referral Terms &amp; Conditions
                  </a>
                </label>
              </div>
              {errors.terms && <p className="input-error">{errors.terms}</p>}

              {/* ── SUBMIT ── */}
              <div className="form-button-container">
                <button type="submit" className="btn btn-accent" disabled={saving}>
                  <span className="btn-title">
                    <span>{saving ? "Submitting..." : "Submit Referral"}</span>
                  </span>
                  <span className="icon-circle">
                    <i className="fa-solid fa-paper-plane" />
                  </span>
                </button>
              </div>

            </form>
          </div>

          {/* Side info card */}
          <div className="ref-form-side">
            <div className="ref-form-side-card">
              <div className="ref-form-side-icon">
                <i className="fa-solid fa-star" />
              </div>
              <h3>Why Refer?</h3>
              <ul className="ref-form-side-list">
                <li><i className="fa-solid fa-check" /> Earn up to 100% off next month</li>
                <li><i className="fa-solid fa-check" /> No limit on referrals</li>
                <li><i className="fa-solid fa-check" /> Applies to Social Media, Digital Marketing &amp; more</li>
                <li><i className="fa-solid fa-check" /> Zero cost to you</li>
              </ul>
            </div>

            <div className="ref-form-side-card ref-form-side-card--contact">
              <h4>Have questions?</h4>
              <p>Reach out to us directly</p>
              <a href="tel:+918368755187" className="ref-contact-link">
                <i className="fa-solid fa-phone" /> +91 83687 55187
              </a>
              <a href="mailto:info@resometa.com" className="ref-contact-link">
                <i className="fa-solid fa-envelope" /> info@resometa.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
