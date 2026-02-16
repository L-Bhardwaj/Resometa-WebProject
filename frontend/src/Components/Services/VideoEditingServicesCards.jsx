import { useEffect, useRef, useState } from "react";
import ResometaVideoServiceWizard from "../Pricing/VideoServicePricingWizard";

/* =========================
   SERVICES DATA
========================= */
const services = [
  {
    title: "BASIC EDITING",
    subtitle:
      "Ideal for Interviews, talking-head videos, online classes, basic social media videos",
    video: "/assets/videos/basic.webm",
    poster: "/assets/images/servicesThumb/basic_thumb.webp",
    features: [
      "Cut & trim",
      "Remove mistakes",
      "Basic transitions",
      "Format resizing",
      "Simple subtitles",
      "Audio leveling",
      "Basic transitions"
    ],
  },
  {
    title: "STANDARD EDITING",
    subtitle: "Ideal for engagement & growth",
    tag: "",
    video: "/assets/videos/standard.webm",
    poster: "/assets/images/servicesThumb/standard_thumb.webp",
    features: [
      "Creative cuts",
      "Smooth transitions",
      "Background music",
      "Animated subtitles",
      "Overlays",
      "Basic color correction",
      "Format resizing",
    ],
  },
  {
    title: "ADVANCED EDITING",
    subtitle: "Ideal for Branding, authority & High Quality Content",
    tag: "Top Pick",
    video: "/assets/videos/advance.webm",
    poster: "/assets/images/servicesThumb/advance_thumb.webp",
    features: [
      "Cinematic color grading",
      "Advanced transitions",
      "Motion graphics",
      "Speed ramping",
      "Storytelling edits",
      "Sound design",
      "Basic Color Correction",
    ],
  },
  {
    title: "PREMIUM EDITING",
    subtitle:
      "Ideal for Ads, Corporate, Campaign videos, Sales & advertising",
    tag: "Popular",
    video: "/assets/videos/premium.webm",
    poster: "/assets/images/servicesThumb/premium_thumb.webp",
    features: [
      "Complex motion graphics",
      "Multi-layer compositing",
      "High-end effects",
      "Advanced grading",
      "Multi-format outputs",
      "Custom visual style",
    ],
  },
];

/* =========================
   COMPONENT
========================= */
const VideoServiceCards = ({ ctaText = "Get Quotation" }) => {
  const videoRefs = useRef([]);
  const [visibleVideos, setVisibleVideos] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [playingIndex, setPlayingIndex] = useState(null);

  const highlightWords = (text) => {
    const highlightList = [
      "Cinematic",
      "Advanced",
      "Motion graphics",
      "Complex",
      "High-end effects",
      "Custom",
      "Animated",
      "Creative",
      "Smooth"
    ];

    let parts = [text];

    highlightList.forEach((word) => {
      parts = parts.flatMap((part) =>
        typeof part === "string"
          ? part.split(new RegExp(`(${word})`, "gi"))
          : part
      );
    });

    return parts.map((part, i) =>
      highlightList.some(
        (word) => word.toLowerCase() === part.toLowerCase()
      ) ? (
        <span key={i} className="ResometaService_highlight">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  /* Lazy load videos when visible */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = entry.target.dataset.index;
            setVisibleVideos((prev) =>
              prev.includes(index) ? prev : [...prev, index]
            );
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.25 }
    );

    videoRefs.current.forEach((video) => {
      if (video) observer.observe(video);
    });

    return () => observer.disconnect();
  }, []);

  /* Play / Pause handler */
  const handleTogglePlay = (index) => {
    const video = videoRefs.current[index];
    if (!video) return;

    if (playingIndex === index) {
      video.pause();
      setPlayingIndex(null);
    } else {
      videoRefs.current.forEach((v) => v && v.pause());
      video.muted = false;
      video.play().catch(() => {});
      setPlayingIndex(index);
    }
  };

  return (
    <section id="video-editing-services" className="ResometaService_section">
      <h2 className="ResometaService_heading"><strong>OUR VIDEO EDITING SERVICES</strong></h2>

      <p className="mb-5">We provide a wide range of professional video editing services tailored to meet the needs of businesses and individuals across various industries.</p>

      <div className="ResometaService_grid">
        {services.map((service, index) => (
          <div key={index} className="ResometaService_card">
            <div className="ResometaService_videoWrapper">
              <video
                ref={(el) => (videoRefs.current[index] = el)}
                data-index={index}
                loading="lazy"
                src={
                  visibleVideos.includes(String(index))
                    ? service.video
                    : undefined
                }
                poster={service.poster}
                playsInline
                preload="none"
                className="ResometaService_video"
                onClick={() => handleTogglePlay(index)}
              />

              {/* Show Play button ONLY when not playing */}
              {playingIndex !== index && (
                <button
                  className="ResometaService_playButton"
                  onClick={() => handleTogglePlay(index)}
                >
                  ▶
                </button>
              )}
            </div>

            <div className="ResometaService_content">
              <div className="ResometaService_titleRow">
                <h3>{service.title}</h3>
                {service.tag && (
                  <span
                    className={`ResometaService_tag ResometaService_tag_${service.tag
                      .replace(/\s+/g, "")
                      .toLowerCase()}`}
                  >
                    {service.tag}
                  </span>
                )}
              </div>

              <p className="ResometaService_subtitle">{service.subtitle}</p>

              <ul>
                {service.features.map((item, i) => (
                  <li key={i}>✔ {highlightWords(item)}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="ResometaService_ctaWrapper">
        <button
          className="ResometaService_ctaButton ResometaService_ctaButton_highlight"
          onClick={() => setShowForm((prev) => !prev)}
        >
          {showForm ? "Hide Quotation Form" : ctaText}
        </button>
      </div>

      {showForm && (
        <div>
          <ResometaVideoServiceWizard onClose={() => setShowForm(false)} />
        </div>
      )}
    </section>
  );
};

export default VideoServiceCards;
