const tiers = [
  {
    referrals: "1 Client Closed",
    discount: "25%",
    label: "Starter",
    desc: "Refer one business and get 25% off your next month's services.",
    icon: "fa-solid fa-handshake",
    highlight: false,
  },
  {
    referrals: "2 Clients Closed",
    discount: "50%",
    label: "Growth",
    desc: "Refer two businesses and slash your next month's bill in half.",
    icon: "fa-solid fa-users",
    highlight: true,
  },
  {
    referrals: "3 Clients Closed",
    discount: "100%",
    label: "Champion",
    desc: "Refer three businesses and get your entire next month absolutely FREE.",
    icon: "fa-solid fa-trophy",
    highlight: false,
  },
];

const ReferralRewards = () => {
  return (
    <section className="ref-rewards" id="rewards">
      <div className="container">
        <div className="ref-section-header">
          <span className="ref-section-tag">Your Rewards</span>
          <h2 className="ref-section-title">
            The More You Refer,<br />
            <span className="ref-accent">The More You Save</span>
          </h2>
          <p className="ref-section-subtitle">
            Every closed referral earns you a bigger discount on your next month's services.
          </p>
        </div>

        <div className="ref-rewards__grid">
          {tiers.map((tier) => (
            <div
              key={tier.referrals}
              className={`ref-reward-card ${tier.highlight ? "ref-reward-card--featured" : ""}`}
            >
              {tier.highlight && (
                <span className="ref-reward-card__badge">Most Popular</span>
              )}
              <div className="ref-reward-card__icon">
                <i className={tier.icon} />
              </div>
              <div className="ref-reward-card__discount">{tier.discount}</div>
              <div className="ref-reward-card__label">{tier.label}</div>
              <div className="ref-reward-card__referrals">{tier.referrals}</div>
              <p className="ref-reward-card__desc">{tier.desc}</p>
            </div>
          ))}
        </div>

        <p className="ref-rewards__note">
          <i className="fa-solid fa-circle-info" />
          &nbsp;Minimum referred transaction value of ₹45,000 + GST required to qualify.
          Discount applies to services taken in April 2026.
        </p>
      </div>
    </section>
  );
};

export default ReferralRewards;
