import React from "react";
import { services } from "../../Data/ServiceData";
import ServiceCard from "../Card/ServiceCard";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";

function ServiceSectionHome() {
  return (
    <>
      <div className="section">
        <div className="hero-container">
          <div className="d-flex flex-column justify-content-center text-center gspace-5">
            
            {/* ✅ Heading */}
            <div className="d-flex flex-column justify-content-center text-center gspace-2">
              <AnimateOnScroll animation="fadeInDown" speed="normal">    
                <div className="sub-heading align-self-center">
                  <i className="fa-regular fa-circle-dot"></i>
                  <span>Our Core Services</span>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll animation="fadeInDown" speed="normal">
                <h2 className="title-heading heading-container heading-container-medium">
                  Digital Solutions That Drive Real Results
                </h2>
              </AnimateOnScroll>
            </div>

            {/* ✅ ONLY FIRST 3 SERVICES */}
            <div className="card-service-wrapper">
              <div className="row row-cols-lg-3 row-cols-md-2 row-cols-1 grid-spacer-2">
                {services.slice(0, 3).map((item) => (   // ✅ LIMIT TO 3
                  <div className="col" key={item.id}>
                    <ServiceCard 
                      icon={item.icon}
                      title={item.title}
                      content={item.content}
                      speed={item.speed}
                      link={item.link}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* ✅ SEE ALL SERVICES BUTTON */}
            <div className="service-link-footer">
              {/* <p>
                Want to explore everything we offer?
              </p> */}

              <div className="see-more-service-btn">
                <a href="/service" className="btn btn-accent">
                <div className="btn-title">
                  <span>See All Services</span>
                </div>
                <div className="icon-circle">
                  <i className="fa-solid fa-arrow-right"></i>
                </div>
              </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default ServiceSectionHome;
