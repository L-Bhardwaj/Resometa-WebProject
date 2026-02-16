import React from "react";
import { useSEO } from "../../seo/useSEO";

import BannerInnerSection from "../../Components/Banner/Inner";
import ServiceSection from "../../Components/Services/service";
import GuideBannerSection from "../../Components/Banner/guide";
import ModalVideoSection from "../../Components/Video/video";
import PricingPlanSection from "../../Components/Pricing/Pricing";
import HeadTitle from "../../Components/Head/HeadTitle";



function ServicePage(){
     useSEO({
        title: "Services - Best Video Editing Services | Resometa",
        description:
          "Resometa privides top-notch online marketing services that transform your business. All our services are designed to help you achieve your goals and drive growth. Our expert team uses the latest tools and techniques to deliver high-quality results that captivate your audience and drive engagement."
      });

    return(
        <>
            
            <BannerInnerSection title="Our Services" currentPage="Services" />
            <ServiceSection />
            {/* <GuideBannerSection /> */}
            {/* <ModalVideoSection /> */}
            {/* <PricingPlanSection /> */}
        </>
    );
}

export default ServicePage;