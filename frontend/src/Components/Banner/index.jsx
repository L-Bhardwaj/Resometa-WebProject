// import Spline from '@splinetool/react-spline/next';
import React, { useRef } from "react";
import VideoButton from "../Video/VideoButton";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";


function BannerHomeSection() {

    const videoContainerRef = useRef(null);

    return (
        <div className="section-banner">
            <AnimateOnScroll animation="fadeInUp">
                <div
                    ref={videoContainerRef}
                    className="banner-video-container keep-dark"
                >

                    {/* Background IMAGE (bottom layer) */}
                    <div id="banner-bg-image">
                        {/* <HeroSwarm />    */}
                    </div>

                    {/* ROBOT (TOP LAYER) */}
                    <div id="robot-layer" className="robot">
                        <spline-viewer url="https://prod.spline.design/AqtlWJlNbO-ZMkvz/scene.splinecode?logo=0"></spline-viewer>
                    </div>

                    {/* TEXT (behind robot) */}
                    <div className="hero-container position-relative">
                        <div className="d-flex flex-column gspace-2">

                            <AnimateOnScroll animation="fadeInLeft" speed="normal">
                                <h1 className="title-heading-banner">
                                    DOMINATE DIGITALLY & UNLOCK EXCEPTIONAL GROWTH!
                                </h1>
                            </AnimateOnScroll>

                            {/* <div className="banner-heading">

                                <AnimateOnScroll animation="fadeInUp" speed="normal">
                                    <div className="banner-video-content order-lg-1 order-2">
                                        <div className="d-flex flex-column flex-lg-row text-lg-start text-center align-items-center gspace-5">
                                            <VideoButton videoUrl="https://www.youtube.com/embed/VhBl3dHT5SY?autoplay=1" />
                                            <p>
                                                Watch our video reviews and see how businesses achieve success
                                                with Marko's digital marketing solutions.
                                            </p>
                                        </div>
                                    </div>
                                </AnimateOnScroll>

                                <AnimateOnScroll animation="fadeInRight" speed="normal">
                                    <div className="banner-content order-lg-2 order-1">
                                        <p>
                                            Marko empowers businesses to grow online with data driven digital
                                            marketing, innovative branding, and performance focused strategies
                                            trusted by top brands lorem ipsum dolor sit amet consectetur.
                                        </p>

                                        <div className="d-flex flex-md-row flex-column justify-content-center justify-content-lg-start align-self-center align-self-lg-start gspace-3">
                                            <a href="./about" className="btn btn-accent">
                                                <div className="btn-title">
                                                    <span>Get Started</span>
                                                </div>
                                                <div className="icon-circle">
                                                    <i className="fa-solid fa-arrow-right"></i>
                                                </div>
                                            </a>

                                            <div className="banner-reviewer">
                                                <div className="d-flex flex-row align-items-center">
                                                    <img src="/assets/images/dummy-img-400x400.jpg" alt="Reviewer" className="avatar" />
                                                    <img src="/assets/images/dummy-img-400x400.jpg" alt="Reviewer" className="avatar" />
                                                    <img src="/assets/images/dummy-img-400x400.jpg" alt="Reviewer" className="avatar" />
                                                </div>
                                                <div className="detail">
                                                    <span>2.7k Positive</span>
                                                    <span>Reviews</span>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </AnimateOnScroll>

                            </div> */}
                        </div>
                    </div>

                </div>
            </AnimateOnScroll>
        </div>
    );
}

export default BannerHomeSection;
