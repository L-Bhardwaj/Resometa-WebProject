import React from "react";
import HeadTitle from "../../Components/Head/HeadTitle";
import BannerInnerSection from "../../Components/Banner/Inner";
import AboutSection from "../../Components/About/about";
import PartnershipSection from "../../Components/Partnership/Partnership";
import ChooseUsAboutSection from "../../Components/ChooseUs/chooseusabout";
import DigitalProcessSection from "../../Components/DigitalProcess/digitalstep";
import TestimonialSection from "../../Components/Testimonial/testimonial";

function AboutPage(){
    return(
        <>
            <HeadTitle title="About - Resometa - Digital Marketing Agency"/>
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