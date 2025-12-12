import React from "react";

const MapsSection = () => {
  return (
    <div className="section pt-0">
        <div className="hero-container">
            <iframe
            loading="lazy"
            className="maps overflow-hidden"
            src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d34200.322149321444!2d77.02321976849878!3d28.4188706985253!3m2!1i1024!2i768!4f13.1!2m1!1sresometa%20technologies!5e0!3m2!1sen!2sin!4v1765358714479!5m2!1sen!2sin"
            title="Resometa Technologies Pvt. Ltd., India"
            aria-label="Resometa Technologies Pvt. Ltd., India" 
            referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    </div>
  );
};

export default MapsSection;
