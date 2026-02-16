import HeadTitle from "../../Components/Head/HeadTitle";
import { useSEO } from "../../seo/useSEO";
import BannerInnerSection from "../../Components/Banner/Inner";
import PrivacyPolicy from "../../Components/PrivacyPolicy/PrivacyPolicy";

function PrivacyPolicyPage(){
     useSEO({
        title: "Privacy Policy - Best Digital Marketing Services | Resometa",
        description:
          "Resometa privides best online marketing services that transform your business at best price."
      });

    return(
        <>
            <HeadTitle title="Privacy Policy - Resometa"/>
            <BannerInnerSection title="Privacy Policy" currentPage="Privacy Policy" />
            <PrivacyPolicy />
        </>
    );
}

export default PrivacyPolicyPage;