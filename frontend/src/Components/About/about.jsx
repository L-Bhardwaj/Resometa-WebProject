import React from "react";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";

function AboutSection(){

    return(
        <div className="section">
            <div className="hero-container">
                <div className="d-flex flex-column flex-lg-row gspace-5">
                    <div className="about-img-layout">
                        <div className="image-container about-img">
                            <AnimateOnScroll animation="fadeInUp" speed="normal">
                            <img
                                src="/assets/images/about/aboutusimg.webp"
                                alt="About Us Image"
                                className="img-fluid"
                            />
                            </AnimateOnScroll>
                        
                            <div className="about-layout">
                                <div className="d-flex flex-column">
                                    <div className="card-about-wrapper">
                                        <AnimateOnScroll animation="fadeInDown" speed="normal">
                                            <div
                                                className="card card-about"
                                                >
                                                <div className="d-flex flex-row align-items-center">
                                                    <span className="counter" data-target="100">100</span>
                                                    <span className="cr">CR</span>
                                                    <span className="counter-detail">+</span>
                                                </div>
                                                <h6>Revenue for Clients</h6>
                                            </div>
                                        </AnimateOnScroll>
                                    </div>
                                <div className="about-spacer"></div>
                                </div>
                                <div className="about-spacer"></div>
                            </div>
                        </div>
                    </div>
                    <div className="about-title">
                        <div className="d-flex flex-column gspace-2">
                            <AnimateOnScroll animation="fadeInRight" speed="normal">
                                <div
                                    className="sub-heading"
                                >
                                    <i className="fa-regular fa-circle-dot"></i>
                                    <span>About Us</span>
                                </div>
                            </AnimateOnScroll>

                            <AnimateOnScroll animation="fadeInRight" speed="normal">
                                <h2 className="title-heading">Who We Are & What Drives Us</h2>
                            </AnimateOnScroll>

                            <p>
                                At Resometa, we specialize in crafting innovative digital marketing strategies
                                that drive real business growth.
                            </p>
                            

                            <div className="d-flex flex-column flex-md-row gspace-1 gspace-md-5">
                                <div className="about-list">
                                    <ul className="check-list">
                                        <li><a href="./single_services">PPC & Paid Ads</a></li>
                                        <li><a href="./single_services">Brand Strategy</a></li>
                                        <li><a href="./single_services">Conversion Optimization</a></li>
                                    </ul>
                                </div>

                                <div className="about-list">
                                    <ul className="check-list">
                                        <li><a href="./single_services">Performance Marketing</a></li>
                                        <li><a href="./single_services">Social Media Growth</a></li>
                                        <li><a href="./single_services">Content Marketing</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
            </div>
        </div>

    );
}

export default AboutSection;