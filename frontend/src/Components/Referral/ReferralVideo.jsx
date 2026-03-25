// Replace with your YouTube video ID
// e.g. for youtube.com/watch?v=dQw4w9WgXcQ  →  "dQw4w9WgXcQ"
const YOUTUBE_VIDEO_ID = "_jpBCr-0eJg";

const ReferralVideo = () => {
  const isPlaceholder = YOUTUBE_VIDEO_ID === "YOUR_YOUTUBE_VIDEO_ID";

  return (
    <section className="ref-video" id="referral-video">
      <div className="container">

        <div className="ref-section-header">
          <span className="ref-section-tag">Watch &amp; Learn</span>
          <h2 className="ref-section-title">
            See How the <span className="ref-accent">Referral Program</span> Works
          </h2>
          <p className="ref-section-subtitle">
            A quick walkthrough of how you can earn free services by referring businesses to Resometa.
          </p>
        </div>

        <div className="ref-video__wrapper">
          {isPlaceholder ? (
            <div className="ref-video__placeholder">
              <div className="ref-video__placeholder-inner">
                <div className="ref-video__play-ring">
                  <div className="ref-video__play-icon">
                    <i className="fa-solid fa-play" />
                  </div>
                </div>
                <p className="ref-video__placeholder-text">Explainer video coming soon</p>
                <p className="ref-video__placeholder-hint">
                  Replace <code>YOUTUBE_VIDEO_ID</code> in <code>ReferralVideo.jsx</code>
                </p>
              </div>
            </div>
          ) : (
            <iframe
              className="ref-video__iframe"
              src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?rel=0&modestbranding=1`}
              title="Resometa Referral Program Explained"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          )}
        </div>

        {/* Bottom features strip */}
        <div className="ref-video__strip">
          {[
            { icon: "fa-solid fa-clock", text: "Quick 2-min overview" },
            { icon: "fa-solid fa-indian-rupee-sign", text: "Earn up to 100% off" },
            { icon: "fa-solid fa-calendar-days", text: "Valid till 31 March" },
          ].map(({ icon, text }) => (
            <div key={text} className="ref-video__strip-item">
              <i className={icon} />
              <span>{text}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ReferralVideo;
