import { useSEO } from "../../seo/useSEO";

import ReferralHero       from "../../Components/Referral/ReferralHero";
import ReferralCreative   from "../../Components/Referral/ReferralCreative";
import ReferralRewards    from "../../Components/Referral/ReferralRewards";
import ReferralHowItWorks from "../../Components/Referral/ReferralHowItWorks";
import ReferralWhySection from "../../Components/Referral/ReferralWhySection";
import ReferralVideo      from "../../Components/Referral/ReferralVideo";
import ReferralForm       from "../../Components/Referral/ReferralForm";
import ReferralTnC        from "../../Components/Referral/ReferralTnC";
import Footer             from "../../Components/Footer/LandingPageFooter";

import "../../Components/Referral/referral.css";

const ReferralPage = () => {
  useSEO({
    title: "Refer & Earn — Get Your Next Month FREE | Resometa",
    description:
      "Refer 3 businesses to Resometa and get your next month of Social Media Marketing, Digital Marketing, or Lead Generation services completely FREE. Offer valid till 31st March 2026.",
  });

  return (
    <>
      {/* 1. Hero — split layout with live countdown + floating reward cards */}
      <ReferralHero />

      {/* 2. The ad creative you designed — shown as a full showcase section */}
      <ReferralCreative />

      {/* 3. Reward tiers — 25% / 50% / 100% cards */}
      <ReferralRewards />

      {/* 4. How it works — 4-step illustrated timeline */}
      <ReferralHowItWorks />

      {/* 5. Why refer Resometa — image + benefits grid */}
      <ReferralWhySection />

      {/* 6. Explainer video — replace YOUTUBE_VIDEO_ID in ReferralVideo.jsx */}
      <ReferralVideo />

      {/* 7. Referral submission form */}
      <ReferralForm />

      {/* 8. Terms & Conditions + Privacy Policy accordion */}
      <ReferralTnC />

      <Footer />
    </>
  );
};

export default ReferralPage;
