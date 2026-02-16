import AnimateOnScroll from "../Hooks/AnimateOnScroll";
import ZigZagTestimonials from "./ZigZagTestimonial";

import { testimonials } from "../../Data/TestimonialData";

const TestimonialSection = () => {
  return (
    <div className="section">
      <div className="hero-container">
        <div className="d-flex flex-column gspace-5">

          {/* Title Row */}
          <div className="grid-spacer-5 text-center">
            <AnimateOnScroll animation="fadeInRight" speed="normal">
              <div className="testimonial-header-wrapper-title">
                <div className="card-testimonial-header-title">
                  <div className="text-center text-res-purple mb-3">
                    <span className="text-res-purple">Customer Voices</span>
                  </div>
                  <h2 className="title-heading">
                    OUR SATISFIED CLIENTS
                  </h2>
                </div>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Reused Component */}
          <ZigZagTestimonials data={testimonials}/>

        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
