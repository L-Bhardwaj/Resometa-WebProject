import React from "react";
import { partnerships } from "../../Data/PartnershipData";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";

// ⭐ Swiper v9+ / v10+ / v11 compatible imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

// -------------------------------------------------------
// Partnership Section
// -------------------------------------------------------
const PartnershipSection = () => {
  return (
    <div className="section-partner">
      <div className="hero-container">
        <AnimateOnScroll animation="fadeInRight" speed="normal">

          <div className="card card-partner">
            <div className="partner-spacer"></div>

            {/* Heading + Description */}
            <div className="row row-cols-lg-2 row-cols-1 align-items-center px-5 position-relative z-2">
              <div className="col">
                <div className="d-flex flex-column justify-content-start pe-lg-3 pe-0">
                  <h3 className="title-heading">
                    Powering Success for Top Brands
                  </h3>
                </div>
              </div>

              <div className="col">
                <div className="d-flex flex-column ps-lg-3 ps-0">
                  <p>
                    Resometa has helped multiple companies achieve outstanding
                    online growth and Crores of rupees in sales.
                  </p>
                </div>
              </div>
            </div>

            {/* Swiper Section */}
            <div className="swiperPartner-layout">
              <div className="swiperPartner-overlay">
                <div className="spacer"></div>
              </div>

              <div className="swiperPartner-container">
                <Swiper
                  modules={[Autoplay]} // ⭐ Required for autoplay
                  autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                  }}
                  loop={true}
                  slidesPerView={6}
                  spaceBetween={20}
                  breakpoints={{
                    230: { slidesPerView: 3 },
                    767: { slidesPerView: 4 },
                    1024: { slidesPerView: 6 },
                  }}
                  className="swiperPartner"
                >
                  {/* Duplicate list for seamless infinite looping */}
                  {partnerships.concat(partnerships).map((partner, index) => (
                    <SwiperSlide key={partner.id + "_" + index}>
                      <div className="partner-slide">
                        <img
                          src={partner.logo}
                          alt="Client Logo"
                          loading="lazy"
                          className="partner-logo img-fluid"
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>

        </AnimateOnScroll>
      </div>
    </div>
  );
};

export default PartnershipSection;
