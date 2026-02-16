import { useSEO } from "../../seo/useSEO";

import TermsAndConditionsSection from "../../Components/TermsAndConditions/TermsAndConditions";

function TermsAndConditionsPage(){
    useSEO({
    title: "Terms & Conditions - Best Digital Marketing Services | Resometa",
    description:
      "Resometa is a digital marketing and web development agency specializing in Social Media and Performance Marketing solutions. "
  });

    return(
        <>
            <TermsAndConditionsSection />
        </>
    );
}

export default TermsAndConditionsPage;