import React, { useState } from "react";
import { testimonials } from "../../Data/TestimonialData";
import TestimonialCard from "../Card/TestimonialCard";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";

const TestimonialSection = () => {
    const [selected, setSelected] = useState(0);

    return (
        <div className="section">
            <div className="hero-container">
                <div className="d-flex flex-column gspace-5">

                    {/* Title Row */}
                    <div className="grid-spacer-5 text-center">
                        <div >
                            <AnimateOnScroll animation="fadeInRight" speed="normal">
                                <div className="testimonial-header-wrapper-title">
                                    <div className="card-testimonial-header-title">
                                        <div className="text-center text-res-purple mb-3">
                                            <span className="text-res-purple">Customer Voices</span>
                                        </div>
                                        <h2 className="title-heading">
                                            Hear from Our Satisfied Clients
                                        </h2>
                                    </div>
                                </div>
                            </AnimateOnScroll>
                        </div>
                    </div>

                    {/* ⚡ Avatars in Zig-Zag Style */}
                    <div className="avatar-zigzag-wrapper">
                        {testimonials.map((t, i) => (
                            <div
                                key={i}
                                className={`zig-avatar-item ${selected === i ? "active" : ""}`}
                                style={{ top: i % 2 === 0 ? "0px" : "22px" }} // zig-zag offset
                                onClick={() => setSelected(i)}
                            >
                                <img src={t.image} alt={t.name} className="zig-avatar-img" />
                            </div>
                        ))}
                    </div>

                    {/* 🔥 Animated Testimonial */}
                    <div className="testimonial-fade-wrapper" key={selected}>
                        <TestimonialCard {...testimonials[selected]} />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default TestimonialSection;
