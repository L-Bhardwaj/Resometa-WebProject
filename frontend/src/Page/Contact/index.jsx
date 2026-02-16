import React from "react";
import { useSEO } from "../../seo/useSEO";

import HeadTitle from "../../Components/Head/HeadTitle";
import BannerInnerSection from "../../Components/Banner/Inner";
import ContactSection from "../../Components/Contact/contact";
import MapsSection from "../../Components/Maps/map";



function ContactPage(){
    useSEO({
    title: "Contact Us for Best Digital Marketing Services | Resometa",
    description:
      "Resometa is a digital marketing and web development agency specializing in Social Media and Performance Marketing solutions. Providing growth in 2 months strategically that sustains your business."
  });

    return(
        <>
            <HeadTitle title="Contact Us - Resometa - Digital Marketing Agency" />
            <BannerInnerSection title="Contact Us" currentPage="Contact Us" />
            <ContactSection />
            <MapsSection />
        </>
    );
}

export default ContactPage;