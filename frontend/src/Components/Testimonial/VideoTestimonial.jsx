import ZigZagTestimonials from "./ZigZagTestimonial";

import { videoTestimonialsReviews } from "../../Data/TestimonialData";

const VideoTestimonials = ({ title, subtitle, testimonials }) => {
  return (
    <section className="resometa-video-testimonial-wrapper">
      {/* Header */}
      <div className="resometa-video-testimonial-header">
        <h2 className="resometa-video-testimonial-title">{title}</h2>
        <p className="resometa-video-testimonial-subtitle">{subtitle}</p>
      </div>

      {/* Grid */}
      <div className="resometa-video-testimonial-grid mb-5">
        {testimonials.map((item) => (
          <div key={item.id} className="resometa-video-testimonial-card">
            {/* Video */}
            <div className="resometa-video-testimonial-video">
              <iframe
                src={item.videoUrl}
                title={item.name}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>

            {/* Content */}
            <div className="resometa-video-testimonial-content">
              <h3 className="resometa-video-testimonial-name">{item.name}</h3>
              <p className="resometa-video-testimonial-role">
                {item.designation}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div>
        <ZigZagTestimonials data={videoTestimonialsReviews}/>
      </div>
    </section>
  );
};

export default VideoTestimonials;
