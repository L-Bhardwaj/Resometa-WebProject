import React from "react";

export default function PrivacyPolicy() {
  return (
    <div className="section">
      <div className="hero-container terms-page">

        {/* HEADER */}
        <div className="text-center gspace-2" style={{ marginBottom: "40px" }}>
          <div className="sub-heading">
            <i className="fa-regular fa-circle-dot"></i>
            <span>Privacy Policy</span>
          </div>

          <h2 className="title-heading heading-container heading-container-short">
            PRIVACY POLICY — RESOMETA TECHNOLOGIES PVT. LTD.
          </h2>

          <p style={{ marginTop: "12px", color: "#666" }}>
            <strong>Last Updated: January 2025</strong>
          </p>
        </div>

        {/* CONTENT WRAPPER */}
        <div
          className="terms-wrapper"
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            lineHeight: "1.7",
            color: "#f2f1f1ff",
          }}
        >

          {/* INTRO */}
          <section className="terms-section" style={{ marginBottom: "32px" }}>
            <p className="terms-text">
              This Privacy Policy explains how <strong>Resometa Technologies Pvt. Ltd.</strong>
              (“Company”, “we”, “our”, “us”) collects, uses, shares, and protects your personal
              information when you access our website, services, or digital platforms.
              <br /><br />
              By using our website or services, you consent to the practices described in this policy.
            </p>
          </section>

          {/* 1. Information We Collect */}
          <section className="terms-section" style={{ marginBottom: "32px" }}>
            <h5 className="terms-title" style={{ marginBottom: "10px" }}>1. Information We Collect</h5>

            <p className="terms-text" style={{ marginBottom: "10px" }}>
              <strong>1.1 Personal Information</strong><br />
              We may collect the following personal details:
            </p>

            <ul className="terms-list">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Business details</li>
              <li>Billing and invoice information</li>
              <li>Social media handles or login IDs (if required)</li>
            </ul>

            <p className="terms-text" style={{ margin: "16px 0 10px" }}>
              <strong>1.2 Technical Information</strong>
            </p>

            <ul className="terms-list">
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Device type & operating system</li>
              <li>Pages viewed and time spent</li>
              <li>Cookies and tracking data</li>
            </ul>

            <p className="terms-text" style={{ margin: "16px 0 10px" }}>
              <strong>1.3 Service-Related Information</strong>
            </p>

            <ul className="terms-list">
              <li>Brand assets (logos, images, guidelines)</li>
              <li>Ads manager access (Meta/Google)</li>
              <li>Hosting, website, or server credentials</li>
            </ul>
          </section>

          {/* 2. How We Use Your Information */}
          <section className="terms-section" style={{ marginBottom: "32px" }}>
            <h5 className="terms-title" style={{ marginBottom: "10px" }}>2. How We Use Your Information</h5>
            <p className="terms-text">
              We use your data to:
            </p>
            <ul className="terms-list">
              <li>Provide and improve our services</li>
              <li>Communicate regarding updates, support, or project discussions</li>
              <li>Process payments and invoices</li>
              <li>Develop marketing and advertising strategies</li>
              <li>Analyze website traffic and performance</li>
              <li>Comply with legal requirements</li>
            </ul>

            <p className="terms-text" style={{ marginTop: "10px" }}>
              <strong>We do not sell your personal information.</strong>
            </p>
          </section>

          {/* 3. How We Share Your Information */}
          <section className="terms-section" style={{ marginBottom: "32px" }}>
            <h5 className="terms-title" style={{ marginBottom: "10px" }}>3. How We Share Your Information</h5>

            <p className="terms-text" style={{ marginBottom: "10px" }}>
              <strong>3.1 Internal Teams</strong><br />
              For design, marketing, development, and project execution.
            </p>

            <p className="terms-text" style={{ marginBottom: "10px" }}>
              <strong>3.2 Trusted Third Parties</strong><br />
              Such as:
            </p>

            <ul className="terms-list">
              <li>Hosting providers</li>
              <li>Payment gateways</li>
              <li>Google & Meta advertising platforms</li>
              <li>Analytics tools</li>
              <li>CRM systems</li>
            </ul>

            <p className="terms-text" style={{ marginTop: "10px" }}>
              These partners follow strict confidentiality and data-security agreements.
            </p>

            <p className="terms-text" style={{ marginTop: "16px" }}>
              <strong>3.3 Legal Compliance</strong><br />
              We may disclose data if required by law, government authorities, or court orders.
            </p>
          </section>

          {/* 4. Data Security */}
          <section className="terms-section" style={{ marginBottom: "32px" }}>
            <h5 className="terms-title" style={{ marginBottom: "10px" }}>4. Data Security</h5>
            <p className="terms-text">
              We use strong security practices including encryption, secured access, limited personnel permissions, 
              and continuous monitoring.  
              <br /><br />
              However, no digital transmission is 100% secure.  
              We are not responsible for breaches caused by third-party platforms, hosting providers, or cyberattacks.
            </p>
          </section>

          {/* 5. Cookies */}
          <section className="terms-section" style={{ marginBottom: "32px" }}>
            <h5 className="terms-title" style={{ marginBottom: "10px" }}>5. Cookies & Tracking Technologies</h5>
            <p className="terms-text">
              Our website uses cookies to enhance your browsing experience, personalize content, and analyze performance.
              <br /><br />
              You may disable cookies through browser settings, but some features may not work properly.
            </p>
          </section>

          {/* 6. Retention */}
          <section className="terms-section" style={{ marginBottom: "32px" }}>
            <h5 className="terms-title" style={{ marginBottom: "10px" }}>6. Retention of Information</h5>
            <p className="terms-text">
              We retain your data as long as required for:
            </p>
            <ul className="terms-list">
              <li>Project execution</li>
              <li>Account activity</li>
              <li>Legal, audit, or taxation requirements</li>
            </ul>

            <p className="terms-text" style={{ marginTop: "10px" }}>
              You may request deletion of your data unless required by law.
            </p>
          </section>

          {/* 7. User Rights */}
          <section className="terms-section" style={{ marginBottom: "32px" }}>
            <h5 className="terms-title" style={{ marginBottom: "10px" }}>7. Your Rights</h5>
            <p className="terms-text">
              You may request:
            </p>
            <ul className="terms-list">
              <li>Access to your data</li>
              <li>Corrections or updates</li>
              <li>Deletion of personal information</li>
              <li>Explanation of how your data is used</li>
              <li>Withdrawal of consent</li>
            </ul>
            <p className="terms-text" style={{ marginTop: "10px" }}>
              Email us at: <strong>info@resometa.com</strong>
            </p>
          </section>

          {/* 8. Third-Party Links */}
          <section className="terms-section" style={{ marginBottom: "32px" }}>
            <h5 className="terms-title" style={{ marginBottom: "10px" }}>8. Third-Party Links</h5>
            <p className="terms-text">
              Our website may include links to external websites.  
              We are not responsible for their content, privacy practices, or security measures.
            </p>
          </section>

          {/* 9. Children's Privacy */}
          <section className="terms-section" style={{ marginBottom: "32px" }}>
            <h5 className="terms-title" style={{ marginBottom: "10px" }}>9. Children’s Privacy</h5>
            <p className="terms-text">
              Our services are not intended for individuals under 16 years old.  
              We do not knowingly collect personal data from minors.
            </p>
          </section>

          {/* 10. Credentials Policy */}
          <section className="terms-section" style={{ marginBottom: "32px" }}>
            <h5 className="terms-title" style={{ marginBottom: "10px" }}>10. Policy for Credentials & Sensitive Data</h5>
            <p className="terms-text">
              Credentials provided by clients (e.g., Meta Ad account, website logins, hosting details) are:
            </p>
            <ul className="terms-list">
              <li>Stored securely</li>
              <li>Accessed only by authorized team members</li>
              <li>Used strictly for service execution</li>
            </ul>
            <p className="terms-text" style={{ marginTop: "10px" }}>
              We are not liable for misuse caused by client-side sharing or compromised credentials.
            </p>
          </section>

          {/* 11. International Transfers */}
          <section className="terms-section" style={{ marginBottom: "32px" }}>
            <h5 className="terms-title" style={{ marginBottom: "10px" }}>11. International Data Transfers</h5>
            <p className="terms-text">
              If you are accessing our website from outside India, your information may be stored on Indian servers.
              By using our services, you consent to this transfer.
            </p>
          </section>

          {/* 12. Changes to Policy */}
          <section className="terms-section" style={{ marginBottom: "32px" }}>
            <h5 className="terms-title" style={{ marginBottom: "10px" }}>12. Changes to This Privacy Policy</h5>
            <p className="terms-text">
              We may update this policy periodically.  
              Continued use of our website means acceptance of updated terms.
            </p>
          </section>

          {/* 13. Contact Info */}
          <section className="terms-section" style={{ marginBottom: "40px" }}>
            <h5 className="terms-title" style={{ marginBottom: "10px" }}>13. Contact Information</h5>
            <p className="terms-text">
              For questions or complaints, contact us:
            </p>

            <p className="terms-text">
              📩 <strong>info@resometa.com</strong><br />
              📞 <strong>+91 8368755187</strong><br />
              📍 ILD Trade Centre, 4th Floor Near Subhash Chowk, Sector 47 Gurugram, Haryana
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
