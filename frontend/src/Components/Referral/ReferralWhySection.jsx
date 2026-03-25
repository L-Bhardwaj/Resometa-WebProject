const benefits = [
  {
    icon: "fa-solid fa-chart-line",
    title: "Strategic Marketing",
    desc: "We run data-driven campaigns for Social Media, Digital Marketing & Lead Generation that actually deliver results.",
  },
  {
    icon: "fa-solid fa-medal",
    title: "Proven Track Record",
    desc: "Brands across industries trust Resometa for consistent quality, creative output, and measurable growth.",
  },
  {
    icon: "fa-solid fa-bolt",
    title: "Scalable Services",
    desc: "Whether your referral is a startup or an enterprise, our packages are designed to scale with their needs.",
  },
  {
    icon: "fa-solid fa-headset",
    title: "Dedicated Support",
    desc: "Every client gets a dedicated account manager — your referral will be in great hands from day one.",
  },
];

const ReferralWhySection = () => {
  return (
    <section className="ref-why">
      {/* Background glow */}
      <div className="ref-why__bg-glow" aria-hidden="true" />

      <div className="container">
        <div className="ref-why__inner">

          {/* ── LEFT: image ── */}
          <div className="ref-why__img-col">
            <div className="ref-why__img-wrap">
              {/* Floating accent line */}
              <div className="ref-why__img-border" aria-hidden="true" />
              <img
                src="/assets/images/ChooseUs/chooseUs.webp"
                alt="Resometa team delivering results"
                className="ref-why__img"
                loading="lazy"
              />
              {/* Floating stat card */}
              <div className="ref-why__stat-card">
                <div className="ref-why__stat-icon">
                  <i className="fa-solid fa-star" />
                </div>
                <div>
                  <span className="ref-why__stat-val">100%</span>
                  <span className="ref-why__stat-sub">Free for 3 referrals</span>
                </div>
              </div>
              {/* Service badge */}
              <div className="ref-why__badge-card">
                <i className="fa-solid fa-circle-check" />
                <span>Social · Digital · Lead Gen</span>
              </div>
            </div>
          </div>

          {/* ── RIGHT: benefits ── */}
          <div className="ref-why__content">
            <span className="ref-section-tag">Why Refer Resometa?</span>
            <h2 className="ref-section-title" style={{ textAlign: "left" }}>
              Your Referrals Deserve<br />
              <span className="ref-accent">The Best Agency</span>
            </h2>
            <p className="ref-section-subtitle" style={{ textAlign: "left", margin: "0 0 36px" }}>
              When you refer a business to Resometa, you're vouching for a partner that delivers.
              Here's what makes us worth recommending.
            </p>

            <div className="ref-why__grid">
              {benefits.map((b) => (
                <div key={b.title} className="ref-why__card">
                  <div className="ref-why__card-icon">
                    <i className={b.icon} />
                  </div>
                  <div>
                    <h4 className="ref-why__card-title">{b.title}</h4>
                    <p className="ref-why__card-desc">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <a href="#referral-form" className="btn ref-hero__btn" style={{ marginTop: "12px" }}>
              <span className="btn-title"><span>Refer a Business</span></span>
              <span className="icon-circle"><i className="fa-solid fa-arrow-right" /></span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ReferralWhySection;
