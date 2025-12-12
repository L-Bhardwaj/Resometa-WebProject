import React, { useState } from "react";

export default function ContactForm() {
  /** FORM STATE */
  const [form, setForm] = useState({
    name: "",
    businessName: "",
    email: "",
    phone: "",
    services: [],
    message: "",
    terms: false
  });

  /** ERROR STATE */
  const [errors, setErrors] = useState({});

  /** SUCCESS / ERROR FLAGS */
  const [success, setSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [saving, setSaving] = useState(false);

  /** BACKEND URL */
  // For Vite → import.meta.env.VITE_BACKEND_URL
  // For CRA → process.env.REACT_APP_BACKEND_URL
  const BACKEND_URL =
    import.meta.env.VITE_BACKEND_URL ||
    "http://localhost:4000";

  /** SERVICES LIST */
  const servicesList = [
    "Web Design",
    "Digital Marketing",
    "SEO",
    "Video Editing",
    "Branding",
    "Social Media Management"
  ];

  /** VALIDATION LOGIC */
  function validate() {
    let e = {};

    if (!form.name || form.name.trim().length < 2)
      e.name = "Enter a valid full name";

    if (!form.businessName || form.businessName.trim().length < 2)
      e.businessName = "Business name is required";

    if (!form.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Enter a valid email address";

    if (!form.phone || !/^(\+?\d{1,3}[- ]?)?\d{7,15}$/.test(form.phone))
      e.phone = "Enter a valid phone number";

    if (!form.services.length)
      e.services = "Select at least one service";

    if (!form.terms)
      e.terms = "You must accept the terms.";

    setErrors(e);
    return Object.keys(e).length === 0;
  }

  /** HANDLE INPUT CHANGE */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  /** HANDLE CHECKBOXES (SERVICES) */
  const toggleService = (service) => {
    const exists = form.services.includes(service);

    setForm((prev) => ({
      ...prev,
      services: exists
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service]
    }));

    setErrors((prev) => ({ ...prev, services: "" }));
  };

  /** HANDLE TERMS */
  const handleTerms = () => {
    setForm((prev) => ({ ...prev, terms: !prev.terms }));
    setErrors((prev) => ({ ...prev, terms: "" }));
  };

  /** SUBMIT FORM */
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) {
      setSubmitError(true);
      setTimeout(() => setSubmitError(false), 2500);
      return;
    }

    setSaving(true);

    try {
      /** CALL YOUR BACKEND */
      await fetch(`${BACKEND_URL}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      setSaving(false);
      setSuccess(true);

      // RESET FORM
      setForm({
        name: "",
        businessName: "",
        email: "",
        phone: "",
        services: [],
        message: "",
        terms: false
      });

      setErrors({});
      setTimeout(() => setSuccess(false), 3000);

    } catch (err) {
      console.error(err);
      setSaving(false);
      setSubmitError(true);
      setTimeout(() => setSubmitError(false), 2500);
    }
  };

  return (
    <div className="form-layout-wrapper">
      <div className="card form-layout">

        <h3 className="title-heading">Let's Talk About Your Next Project</h3>

        {/* SUCCESS */}
        {success && (
          <div className="alert success">
            <span className="check-icon"><i className="fa-solid fa-check"></i></span>
            <p className="text-center">Message sent successfully!</p>
          </div>
        )}

        {/* ERROR */}
        {submitError && (
          <div className="alert error">
            <span className="cross-icon"><i className="fa-solid fa-xmark"></i></span>
            <p className="text-center">Please fix the errors below.</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="form">

          {/* NAME + BUSINESS */}
          <div className="row row-cols-md-2 row-cols-1 g-3">
            <div className="col">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={form.name}
                onChange={handleChange}
              />
              {errors.name && <p className="input-error">{errors.name}</p>}
            </div>

            <div className="col">
              <input
                type="text"
                name="businessName"
                placeholder="Business Name"
                value={form.businessName}
                onChange={handleChange}
              />
              {errors.businessName && (
                <p className="input-error">{errors.businessName}</p>
              )}
            </div>
          </div>

          {/* EMAIL + PHONE */}
          <div className="row row-cols-md-2 row-cols-1 g-3">
            <div className="col">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={form.email}
                onChange={handleChange}
              />
              {errors.email && <p className="input-error">{errors.email}</p>}
            </div>

            <div className="col">
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={form.phone}
                onChange={handleChange}
              />
              {errors.phone && <p className="input-error">{errors.phone}</p>}
            </div>
          </div>

          {/* SERVICES */}
          <div className="row row-cols-1 g-3">
            <div className="col">
              <h5 className="service-heading">Select the Services</h5>

              <div className="services-box">
                {servicesList.map((service, i) => (
                  <label key={i} className="service-item">
                    <input
                      type="checkbox"
                      checked={form.services.includes(service)}
                      onChange={() => toggleService(service)}
                    />
                    <span className="custom-checkbox"></span>
                    {service}
                  </label>
                ))}
              </div>

              {errors.services && (
                <p className="input-error">{errors.services}</p>
              )}
            </div>
          </div>

          {/* MESSAGE */}
          <textarea
            name="message"
            rows="5"
            placeholder="Message (Optional)"
            value={form.message}
            onChange={handleChange}
          />

          {/* TERMS */}
          <div style={{ marginTop: "12px", display: "flex", gap: "8px", alignItems: "center" }}>
            <input
              type="checkbox"
              checked={form.terms}
              onChange={handleTerms}
              style={{ width: 16, height: 16 }}
            />
            <label style={{ fontSize: 13 }}>I accept the Terms & Conditions</label>
          </div>

          {errors.terms && <p className="input-error">{errors.terms}</p>}

          {/* SUBMIT */}
          <div className="form-button-container">
            <button type="submit" className="btn btn-accent" disabled={saving}>
              <span className="btn-title">
                <span>{saving ? "Sending..." : "Send a Message"}</span>
              </span>
              <span className="icon-circle">
                <i className="fa-solid fa-arrow-right"></i>
              </span>
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}
