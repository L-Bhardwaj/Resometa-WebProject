import React from "react";
import { useSEO } from "../../seo/useSEO";

import BannerHomeSection from "../../Components/Banner";
import ExpertiseSection from "../../Components/Expertise/expertise";
import ChooseUsSection from "../../Components/ChooseUs/choose";
import GuideBannerSection from "../../Components/Banner/guide";
import ModalVideoSection from "../../Components/Video/video";
import ServiceSectionHome from "../../Components/Services/ServiceSectionHome";
import TestimonialSection from "../../Components/Testimonial/testimonial";
import DigitalProcessSection from "../../Components/DigitalProcess/digitalstep";
import PartnershipSection from "../../Components/Partnership/Partnership";

function HomePage() {
  useSEO({
    title: "Best Digital Marketing Services | Resometa",
    description:
      "Resometa is a digital marketing and web development agency specializing in Social Media and Performance Marketing solutions."
  });

  return (
    <>
      <BannerHomeSection />
      <ExpertiseSection />
      <PartnershipSection />
      <ChooseUsSection />
      <GuideBannerSection />
      <ModalVideoSection />
      <ServiceSectionHome />
      <TestimonialSection />
      <DigitalProcessSection />
    </>
  );
}

export default HomePage;
