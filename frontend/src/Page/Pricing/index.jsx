import React from "react";
import { useSEO } from "../../seo/useSEO";

import BannerInnerSection from "../../Components/Banner/Inner";
import PricingPlanSection from "../../Components/Pricing/Pricing";
import DigitalProcessSection from "../../Components/DigitalProcess/digitalstep";
import ChooseUsSection from "../../Components/ChooseUs/choose";

function PricingPage(){
     useSEO({
        title: "Pricing Plan - Best Digital Marketing Services | Resometa",
        description:
          "Resometa privides best online marketing services that transform your business at best price."
      });

    return(
        <>
            <BannerInnerSection title="Pricing Plan" currentPage="Pricing Plan" />
            <PricingPlanSection />
            <DigitalProcessSection />
            {/* <ChooseUsSection /> */}
        </>
    );
}

export default PricingPage;