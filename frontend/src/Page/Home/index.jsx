import React from "react";
import HeadTitle from "../../Components/Head/HeadTitle";
import BannerHomeSection from "../../Components/Banner";
import ExpertiseSection from "../../Components/Expertise/expertise";
import ChooseUsSection from "../../Components/ChooseUs/choose";
import GuideBannerSection from "../../Components/Banner/guide";
import ModalVideoSection from "../../Components/Video/video";
import ServiceSectionHome from "../../Components/Services/ServiceSectionHome";

import TestimonialSection from "../../Components/Testimonial/testimonial";
import DigitalProcessSection from "../../Components/DigitalProcess/digitalstep";

import PartnershipSection from "../../Components/Partnership/Partnership";


function HomePage(){
    return(
        <>
            <HeadTitle title="Home - Resometa - Digital Marketing Agency" />
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