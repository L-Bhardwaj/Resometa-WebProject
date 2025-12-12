import HeadTitle from "../../Components/Head/HeadTitle";
import BannerInnerSection from "../../Components/Banner/Inner";
import PrivacyPolicy from "../../Components/PrivacyPolicy/PrivacyPolicy";

function PrivacyPolicyPage(){
    return(
        <>
            <HeadTitle title="Privacy Policy - Resometa"/>
            <BannerInnerSection title="Privacy Policy" currentPage="Privacy Policy" />
            <PrivacyPolicy />
        </>
    );
}

export default PrivacyPolicyPage;