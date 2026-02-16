import { Routes, Route } from "react-router-dom";

// Layouts
import MainLayout from "./Layouts/MainLayouts";
import LandingLayout from "./Layouts/LandingLayout";

// Pages
// Landing Pages
import VideoEditingServicePage from "./Page/Service/VideoEditingServices";

// import ResometaVideoServiceWizard from "./Components/Pricing/VideoServicePricingWizard";

import ThankYou from "./Page/Service/Thankyou";

// Main Pages
import HomePage from "./Page/Home";
import AboutPage from "./Page/About";
import ServicePage from "./Page/Service";
import PricingPage from "./Page/Pricing";
import TestimonialPage from "./Page/Testimonial";
import ContactPage from "./Page/Contact";
import TermsAndConditionsPage from "./Page/TermsAndConditions";
import PrivacyPolicyPage from "./Page/PrivacyPolicy";
import NotFoundPage from "./Page/NotFound";

function AppRouter() {
  return (
    <Routes>
      {/* Landing pages (NO Navbar/Footer) */}
      <Route element={<LandingLayout />}>
        <Route path="/services/video-editing" element={<VideoEditingServicePage />} />

        <Route path="/services/thankyou" element={<ThankYou/>} />
      </Route>

      {/* Main site pages (WITH Navbar/Footer) */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/testimonial" element={<TestimonialPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditionsPage />} />
        <Route path="/privacypolicy" element={<PrivacyPolicyPage />} />
      </Route>

      {/* 404 */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default AppRouter;
