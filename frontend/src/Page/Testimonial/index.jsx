import React from "react";
import { useSEO } from "../../seo/useSEO";
import HeadTitle from "../../Components/Head/HeadTitle";
import BannerInnerSection from "../../Components/Banner/Inner";
import NewsletterSection from "../../Components/Form/Newsletter";
import BlogSection from "../../Components/Blog/blog";
import TestimonialSection from "../../Components/Testimonial/testimonial";


function TestimonialPage(){
    useSEO({
    title: "Testimonials - Best Video Editing Services | Resometa",
    description:
      "Resometa privides top-notch online marketing services that transform your business. Our expert team uses the latest tools and techniques to deliver high-quality results that captivate your audience and drive engagement."
  });

    return(
        <>
            
            <BannerInnerSection title="Testimonials" currentPage="Testimonials" />
            <TestimonialSection />
            {/* <NewsletterSection />
            <BlogSection /> */}
        </>
    );
}

export default TestimonialPage;