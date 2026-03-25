/*
 * REFERRAL CREATIVE SECTION
 *
 * This section displays the promotional ad creative you designed.
 *
 * ► ACTION REQUIRED:
 *   Save the referral ad image (the "Refer 3 Businesses" promotional graphic)
 *   to:  frontend/public/assets/images/referral/referral-creative.png
 *   (Create the `referral` folder inside public/assets/images/)
 *
 * Once you drop the file there, it will automatically appear in this section.
 */

const highlights = [
  { pct: "25%", label: "1 Client Closed", icon: "fa-solid fa-handshake" },
  { pct: "50%", label: "2 Clients Closed", icon: "fa-solid fa-users" },
  { pct: "100%", label: "3 Clients Closed", icon: "fa-solid fa-trophy", featured: true },
];

const ReferralCreative = () => {
  return (
    <section className="ref-creative" id="referral-offer">
      {/* Line-pattern background overlay */}
      <img
        src="/assets/images/imgi_44_Line-Background-4.png"
        alt=""
        className="ref-creative__bg-lines"
        aria-hidden="true"
        loading="lazy"
      />

      <div className="container">
        <div className="ref-creative__inner">

          {/* ── LEFT: Ad creative image ── */}
          <div className="ref-creative__img-wrap">
            <div className="ref-creative__img-glow" aria-hidden="true" />
            <img
              src="/assets/images/referral/referral-creative.webp"
              alt="Refer 3 Businesses — Get Your Next Month FREE"
              className="ref-creative__img"
              loading="lazy"
              onError={(e) => {
                /* Show placeholder until the image file is added */
                e.target.style.display = "none";
                e.target.nextSibling.style.display = "flex";
              }}
            />
            {/* Placeholder shown until image file is dropped in */}
            <div className="ref-creative__img-placeholder" style={{ display: "none" }}>
              <i className="fa-solid fa-image" />
              <p>Drop <code>referral-creative.png</code> into</p>
              <code>public/assets/images/referral/</code>
            </div>
          </div>

          {/* ── RIGHT: Highlights ── */}
          <div className="ref-creative__content">
            <span className="ref-section-tag">Limited Time Offer</span>

            <h2 className="ref-creative__heading">
              Refer Businesses.<br />
              <span className="ref-accent">Earn Your Freedom.</span>
            </h2>

            <p className="ref-creative__sub">
              Share Resometa with businesses that need Social Media Marketing, Digital
              Marketing, or Lead Generation — and watch your own monthly bill shrink
              with every client that closes.
            </p>

            {/* Tier highlights */}
            <div className="ref-creative__tiers">
              {highlights.map((h) => (
                <div
                  key={h.pct}
                  className={`ref-creative__tier ${h.featured ? "ref-creative__tier--featured" : ""}`}
                >
                  <div className="ref-creative__tier-icon">
                    <i className={h.icon} />
                  </div>
                  <div className="ref-creative__tier-body">
                    <span className="ref-creative__tier-pct">{h.pct}</span>
                    <span className="ref-creative__tier-label">{h.label}</span>
                  </div>
                  {h.featured && <span className="ref-creative__tier-badge">Best Deal</span>}
                </div>
              ))}
            </div>

            {/* Deadline badge */}
            <div className="ref-creative__deadline">
              <i className="fa-solid fa-calendar-xmark" />
              <div>
                <strong>Offer valid till 31st March 2026</strong>
                <p>Referred client must complete transaction before deadline</p>
              </div>
            </div>

            {/* CTA */}
            <a href="#referral-form" className="btn ref-hero__btn">
              <span className="btn-title"><span>Refer Now &amp; Start Saving</span></span>
              <span className="icon-circle"><i className="fa-solid fa-arrow-right" /></span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ReferralCreative;
