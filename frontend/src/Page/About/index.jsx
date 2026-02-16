import React from "react";
import { useSEO } from "../../seo/useSEO";

import BannerInnerSection from "../../Components/Banner/Inner";
import AboutSection from "../../Components/About/about";
import PartnershipSection from "../../Components/Partnership/Partnership";
import ChooseUsAboutSection from "../../Components/ChooseUs/chooseusabout";
import DigitalProcessSection from "../../Components/DigitalProcess/digitalstep";
import TestimonialSection from "../../Components/Testimonial/testimonial";



function AboutPage(){
     useSEO({
        title: "About - Best Digital Marketing Services | Resometa",
        description:
          "Resometa privides best online marketing services that transform your business. Our expert team uses the latest tools and techniques to deliver high-quality results that captivate your audience and drive engagement."
      });

    return(
        <>
            
            <BannerInnerSection title="About Resometa" currentPage="About Us" />
            <AboutSection />
            <PartnershipSection />
            <ChooseUsAboutSection />
            {/* <GuideBannerSection /> */}
            {/* <TeamSection /> */}
            <DigitalProcessSection />
            <TestimonialSection />
        </>
    );
}

export default AboutPage;