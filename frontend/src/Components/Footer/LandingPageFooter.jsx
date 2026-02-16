import React from "react";

const Footer = () => {
  return (
    <div className="section-footer">
        <div className="bg-footer-wrapper">
            {/* bg-footer  */}
            <div className="">
                <div className="hero-container position-relative z-2">
                    <div className="d-flex flex-column gspace-2">
                        <div>
                            <div>
                                <div className="footer-logo-container text-center align-items-center justify-content-center d-flex flex-column">
                                    <div className="logo-container-footer">
                                    <img src="/assets/images/Logo/logo3.png" alt="Logo" loading="lazy" className="site-logo img-fluid" />
                                    </div>
                                    <h4>Reach the Right Audience</h4>
                                    <p>
                                    Driving Digital Growth with Innovation & Strategy
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* <div className="footer-content-spacer"></div> */}
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