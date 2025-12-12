import HeadTitle from "../../Components/Head/HeadTitle";
import BannerInnerSection from "../../Components/Banner/Inner";
import TermsAndConditionsSection from "../../Components/TermsAndConditions/TermsAndConditions";

function TermsAndConditionsPage(){
    return(
        <>
            <HeadTitle title="Terms & Conditions - Resometa"/>
            <BannerInnerSection title="Terms & Conditions" currentPage="Terms & Conditions" />
            <TermsAndConditionsSection />
        </>
    );
}

export default TermsAndConditionsPage;