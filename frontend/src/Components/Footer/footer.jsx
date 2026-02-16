import React from "react";

const Footer = () => {
  return (
    <div className="section-footer">
        <div className="bg-footer-wrapper">
            <div className="bg-footer">
                <div className="hero-container position-relative z-2">
                    <div className="d-flex flex-column gspace-2">
                        <div className="row row-cols-lg-4 row-cols-md-2 row-cols-1 grid-spacer-5">
                            <div className="col col-lg-4">
                                <div className="footer-logo-container">
                                    <div className="logo-container-footer">
                                    <img src="/assets/images/Logo/logo3.png" alt="Logo" loading="lazy" className="site-logo img-fluid" />
                                    </div>
                                    <h4>Reach the Right Audience</h4>
                                    <p>
                                    Driving Digital Growth with Innovation & Strategy
                                    </p>
                                </div>
                            </div>

                            <div className="col col-lg-2">
                                <div className="footer-quick-links">
                                    <h5>Quick Links</h5>
                                    <ul className="footer-list">
                                        <li><a href="/">Home</a></li>
                                        <li><a href="/about">About Us</a></li>
                                        <li><a href="/service">Service</a></li>
                                        <li><a href="/pricing">Pricing</a></li>
                                        <li><a href="/testimonial">Testimonials</a></li>
                                        <li><a href="/contact">Contact Us</a></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col col-lg-3">
                                {/* <div className="footer-services-container">
                                    <h5>Services</h5>
                                    <ul className="footer-list">
                                        <li><a href="/single_services">Social Media Marketing</a></li>
                                        <li><a href="/single_services">SEO Optimization</a></li>
                                        <li><a href="/single_services">PPC Advertising</a></li>
                                        <li><a href="/single_services">Content Marketing</a></li>
                                        <li><a href="/single_services">Branding Strategy</a></li>
                                        <li><a href="/single_services">Email Marketing</a></li>
                                    </ul>
                                </div> */}
                            </div>

                            <div className="col col-lg-3">
                                <div className="footer-contact-container">
                                    <h5>Contact Info</h5>
                                    <ul className="contact-list">
                                        <li>info@resometa.com</li>
                                        <li>+91 8368755187</li>
                                        <li>ILD Trade Centre, 4th Floor
                                            Near Subhash Chowk, Sector 47
                                            Gurugram, Haryana</li>
                                    </ul>
                                    <div className="d-flex flex-column gspace-1">
                                        <h5>Social Media</h5>
                                        <div className="social-container">
                                            <div className="social-item-wrapper">
                                                <a href="https://www.facebook.com/share/1Ci8xVNmQT/" className="social-item" target="_blank">
                                                    <i className="fa-brands fa-facebook"></i>
                                                </a>
                                            </div>
                                            {/* <div className="social-item-wrapper">
                                                <a href="https://youtube.com" className="social-item">
                                                    <i className="fa-brands fa-youtube"></i>
                                                </a>
                                            </div> */}
                                            <div className="social-item-wrapper">
                                                <a href="https://www.instagram.com/resometaofficial?igsh=eGRoMmgwamJtcjZr&utm_source=qr" className="social-item" target="_blank">
                                                    <i className="fa-brands fa-instagram"></i>
                                                </a>
                                            </div>
                                            <div className="social-item-wrapper">
                                                <a href="https://www.linkedin.com/company/resometa/" className="social-item" target="_blank">
                                                    <i className="fa-brands fa-linkedin"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="footer-content-spacer"></div>
                    </div>

                    <div className="copyright-container">
                        <span className="copyright">© {new Date().getFullYear()} Resometa. All Rights Reserved.</span>
                        <div className="d-flex flex-row gspace-2">
                            <a href="/terms-and-conditions" className="legal-link">Terms of Service</a>
                            <a href="/privacypolicy" className="legal-link">Privacy Policy</a>
                        </div>
                    </div>

                    <div className="footer-spacer"></div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Footer;