import { useEffect, useRef, useState } from "react";

const LazyVideo = ({ src, className }) => {
  const videoRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    if (videoRef.current) observer.observe(videoRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={videoRef}
      className={className}
      src={isVisible ? src : undefined}
      autoPlay={isVisible}
      loop
      muted
      playsInline
      preload="none"
      poster="/assets/images/video-placeholder.jpg"
    />
  );
};

export default LazyVideo;
