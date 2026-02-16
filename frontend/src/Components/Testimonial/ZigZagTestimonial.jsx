import React, { useState } from "react";
import TestimonialCard from "../Card/TestimonialCard";

const ZigZagTestimonials = ({ data = [] }) => {
  const [selected, setSelected] = useState(0);

  if (!data.length) return null; // safety

  return (
    <div className="d-flex flex-column gspace-5">

      {/* ⚡ Avatars in Zig-Zag Style */}
      <div className="avatar-zigzag-wrapper">
        {data.map((t, i) => (
          <div
            key={i}
            className={`zig-avatar-item ${selected === i ? "active" : ""}`}
            style={{ top: i % 2 === 0 ? "0px" : "22px" }}
            onClick={() => setSelected(i)}
          >
            <img src={t.image} alt={t.name} loading="lazy" className="zig-avatar-img" />
          </div>
        ))}
      </div>

      {/* 🔥 Animated Testimonial */}
      <div className="testimonial-fade-wrapper" key={selected}>
        <TestimonialCard {...data[selected]} />
      </div>

    </div>
  );
};

export default ZigZagTestimonials;
