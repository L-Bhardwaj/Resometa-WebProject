import { useState } from "react";

const sections = [
  {
    title: "Offer Validity",
    icon: "fa-solid fa-calendar-days",
    body: "The referral offer is valid till 31st March 2026. To avail referral benefits for services in April, the referred client must complete the transaction on or before 31st March. Any transaction completed on or after 1st April will not be eligible for the referral discount.",
  },
  {
    title: "Discount Applicability",
    icon: "fa-solid fa-percent",
    body: "Referral discounts of 25%, 50%, or 100% will be applicable only on services availed during the month of April 2026. These discounts cannot be adjusted against services taken before or after April, unless otherwise approved in writing by the company.",
  },
  {
    title: "Minimum Transaction Value",
    icon: "fa-solid fa-indian-rupee-sign",
    body: "Referral benefits will be applicable only if the referred client completes a minimum transaction of ₹45,000 + applicable GST. Transactions below this amount will not qualify for any referral discount.",
  },
  {
    title: "Brand-Specific Validity",
    icon: "fa-solid fa-building",
    body: "Referral discounts are valid for services related to only one brand / business entity of the referred client. If a client owns multiple brands or ventures, the referral benefit will not apply across all brands. Separate pricing and agreements will apply for additional brands.",
  },
  {
    title: "Payment & Activation",
    icon: "fa-solid fa-credit-card",
    body: "Referral discounts will be activated only after successful receipt of agreed payment. Any delay in payment may result in cancellation of referral benefits at the company's discretion.",
  },
  {
    title: "Scope of Services",
    icon: "fa-solid fa-layer-group",
    body: "Referral discounts apply only to selected marketing, branding, website development, or creative service packages as defined in the proposal. Any additional requirements, urgent tasks, revisions beyond scope, or service upgrades will be charged separately.",
  },
  {
    title: "Non-Transferability",
    icon: "fa-solid fa-ban",
    body: "Referral benefits are non-transferable and cannot be exchanged for cash, refunds, or credit adjustments. The offer is applicable only for new client onboarding through referral.",
  },
  {
    title: "Company Rights",
    icon: "fa-solid fa-shield-halved",
    body: "Resometa Technologies Pvt. Ltd. reserves the right to modify, extend, or withdraw the referral offer without prior notice. The company also reserves the right to verify referral eligibility and approve final discount applicability.",
  },
];

const privacySections = [
  {
    title: "Information Collection",
    icon: "fa-solid fa-database",
    body: "We may collect: name and contact details, business/brand information, service requirements, and billing/transaction details. This information is collected strictly for service delivery, communication, and legal compliance.",
  },
  {
    title: "Use of Information",
    icon: "fa-solid fa-gear",
    body: "Client information may be used to provide and manage services, share proposals, invoices and updates, improve service experience, and maintain financial and legal records.",
  },
  {
    title: "Data Sharing & Security",
    icon: "fa-solid fa-lock",
    body: "Information may be shared internally with authorised team members or limited trusted third-party platforms (ad channels, hosting, payment gateways). Resometa does not sell or misuse client data. Reasonable digital security measures are implemented. The company is not responsible for breaches caused by third-party systems or cyber-attacks.",
  },
];

const AccordionItem = ({ item }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={`ref-tnc-item ${open ? "ref-tnc-item--open" : ""}`}>
      <button
        className="ref-tnc-toggle"
        onClick={() => setOpen((p) => !p)}
        aria-expanded={open}
      >
        <span className="ref-tnc-toggle-left">
          <i className={item.icon} />
          <span>{item.title}</span>
        </span>
        <i className={`fa-solid ${open ? "fa-chevron-up" : "fa-chevron-down"} ref-tnc-chevron`} />
      </button>
      {open && <div className="ref-tnc-body">{item.body}</div>}
    </div>
  );
};

const ReferralTnC = () => {
  return (
    <section className="ref-tnc" id="terms-conditions">
      <div className="container">
        <div className="ref-section-header">
          <span className="ref-section-tag">Legal</span>
          <h2 className="ref-section-title">
            Terms, Conditions &amp; <span className="ref-accent">Privacy Policy</span>
          </h2>
          <p className="ref-section-subtitle">
            Resometa Technologies Pvt. Ltd. — Please read before participating in the referral program.
          </p>
        </div>

        <div className="ref-tnc-columns">
          <div className="ref-tnc-col">
            <h3 className="ref-tnc-col-heading">
              <i className="fa-solid fa-file-contract" /> Referral Terms &amp; Conditions
            </h3>
            {sections.map((s) => (
              <AccordionItem key={s.title} item={s} />
            ))}
          </div>

          <div className="ref-tnc-col">
            <h3 className="ref-tnc-col-heading">
              <i className="fa-solid fa-shield-halved" /> Privacy Policy
            </h3>
            {privacySections.map((s) => (
              <AccordionItem key={s.title} item={s} />
            ))}
            <div className="ref-tnc-consent">
              <i className="fa-solid fa-circle-check" />
              <p>
                By participating in the referral program and availing services, clients consent to
                the collection and use of their information as per this policy. The company reserves
                the right to update these terms at any time; continued engagement implies acceptance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReferralTnC;
