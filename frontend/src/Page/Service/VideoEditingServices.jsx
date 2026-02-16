import { useSEO } from "../../seo/useSEO";

import VideoGrid from "../../Components/VideoGrid_Hero/VideoGrid";
import VideoServiceCards from "../../Components/Services/VideoEditingServicesCards";
// import Footer from "../../Components/Footer/footer";
import VideoTestimonials from "../../Components/Testimonial/VideoTestimonial";
import FAQ from "../../Components/FAQs/faq";
import Footer from "../../Components/Footer/LandingPageFooter";

import { VideoEditingServicefaqData } from "../../Data/ServiceVideoEditingFaqData";
import { videoTestimonialsData } from "../../Data/TestimonialData";



const Landing = () => {
  useSEO({
    title: "Best Video Editing Services | Resometa",
    description:
      "Resometa privides top-notch video editing services that transform your raw footage into compelling stories. Our expert editors use the latest tools and techniques to deliver high-quality videos that captivate your audience and drive engagement."
  });

  return (
    <>
      <VideoGrid
        title ="TRANSFORM YOUR FOOTAGE INTO COMPELLING STORIES"
        titleLines={[
          "Strategic Editing",
          "Consistent Quality",
          "Scalable Results",
        ]}
        buttonText="Get Started"
        buttonLink="#video-editing-services"
      />
      <VideoServiceCards 
      ctaText="GET YOUR CUSTOM QUOTE"
    ctaLink="/video-service-pricing/calculate" />

      <VideoTestimonials
          title="WHAT OUR CLIENTS SAY"
          subtitle="Real stories from businesses that trusted Resometa for their video editing services."
          testimonials={videoTestimonialsData}
      />


    <FAQ
       title="FREQUENTLY ASKED QUESTIONS"
      subtitle="Everything you need to know about our Video Editing Services."
      faqs={VideoEditingServicefaqData}
    />
      <Footer />
    
    </>
  );
};

export default Landing;
