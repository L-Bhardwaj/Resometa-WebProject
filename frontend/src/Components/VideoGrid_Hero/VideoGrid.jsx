import LazyVideo from "../LazyVideo/LazyLoadingVideo";

// Different videos for each column
const column1 = [
  { src: "/assets/videos/video_edit_5.webm", type: "reel" },
  { src: "/assets/videos/video_edit_21.webm", type: "youtube" },
  { src: "/assets/videos/video_edit_12.webm", type: "reel" },
];

const column2 = [
  { src: "/assets/videos/video_edit_0.webm", type: "reel" },
  { src: "/assets/videos/basic_video_1.webm", type: "youtube" },
  { src: "/assets/videos/video_edit_25.webm", type: "reel" },
];

const column3 = [
  { src: "/assets/videos/video_edit_02.webm", type: "youtube" },
  { src: "/assets/videos/video_edit_29.webm", type: "reel" },
  { src: "/assets/videos/video_edit_16.webm", type: "reel" },
];

const column4 = [
  { src: "/assets/videos/video_edit_34.webm", type: "youtube" },
  { src: "/assets/videos/video_edit_5.webm", type: "reel" },
  { src: "/assets/videos/video_edit_01.webm", type: "reel" },
];

const ResometaAutoVideoWall = ({ buttonText, buttonLink }) => {
  return (
    <section className="ResometaWall_section">

      {/* VIDEO WALL */}
      <div className="ResometaWall_wrapper">

        {/* Column 1 */}
        <div className="ResometaWall_column speed_slow">
          {[...column1, ...column1].map((video, i) => (
            <div
              key={i}
              className={`ResometaWall_item ${
                video.type === "youtube"
                  ? "ResometaWall_item_youtube"
                  : "ResometaWall_item_reel"
              }`}
            >
              <LazyVideo src={video.src} />
            </div>
          ))}
        </div>

        {/* Column 2 */}
        <div className="ResometaWall_column speed_medium">
          {[...column2, ...column2].map((video, i) => (
            <div
              key={i}
              className={`ResometaWall_item ${
                video.type === "youtube"
                  ? "ResometaWall_item_youtube"
                  : "ResometaWall_item_reel"
              }`}
            >
              <LazyVideo src={video.src} />
            </div>
          ))}
        </div>

        {/* Column 3 */}
        <div className="ResometaWall_column speed_slower">
          {[...column3, ...column3].map((video, i) => (
            <div
              key={i}
              className={`ResometaWall_item ${
                video.type === "youtube"
                  ? "ResometaWall_item_youtube"
                  : "ResometaWall_item_reel"
              }`}
            >
              <LazyVideo src={video.src} />
            </div>
          ))}
        </div>

        {/* Column 4 */}
        <div className="ResometaWall_column speed_slowest">
          {[...column4, ...column4].map((video, i) => (
            <div
              key={i}
              className={`ResometaWall_item ${
                video.type === "youtube"
                  ? "ResometaWall_item_youtube"
                  : "ResometaWall_item_reel"
              }`}
            >
              <LazyVideo src={video.src} />
            </div>
          ))}
        </div>

      </div>

      {/* Overlay */}
      <div className="ResometaWall_overlay"></div>

      {/* HERO IMAGE CTA */}
      <div className="ResometaWall_ctaImageWrapper">

        {/* Desktop Image */}
        <img
          src="/assets/images/service/video_cta_desktop.webp"
          alt="Transform your footage"
          className="ResometaWall_ctaImage desktop"
        />

        {/* Mobile Image */}
        <img
          src="/assets/images/service/video_cta_mobile.webp"
          alt="Transform your footage"
          className="ResometaWall_ctaImage mobile"
        />

        {/* CTA BUTTON */}
        {buttonText && buttonLink && (
        <a href={buttonLink} className="ResometaWall_trapeziumBtn">

          {/* Desktop */}
          <img
            src="/assets/images/service/get-started-desktop.webp"
            alt="Get Started"
            className="desktop"
          />

          {/* Mobile */}
          <img
            src="/assets/images/service/get-started-mobile.webp"
            alt="Get Started"
            className="mobile"
          />

        </a>
      )}

      </div>

    </section>
  );
};

export default ResometaAutoVideoWall;
