import React, { useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { Row, Col, Card } from 'react-bootstrap'
import Header1 from './../layout/header1';
import Footer1 from './../layout/footer1';
import Bottom from './../element/bottom';




function Career() {

    useEffect(() => {
        document.title = "BtcEX | Career";
    }, []);

    return (
        <>
            <Header1 />
            <div className="intro-video section-padding">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-8">
                            {/* <div className="intro-video-play">
                                <div className="play-btn">
                                    <Link><i className="fa fa-play"></i></Link>
                                </div>
                            </div> */}
                            <div className="intro-video-content text-center mt-3">
                                <h2>We saved a seat for you</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="career section-padding">
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-xl-5">
                            <div className="career-content-img">
                                <img className="img-fluid" src={require('./../../images/careers/working-btcex.jpg')} alt="" />
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="career-content py-5">
                                <h3>Working at BtcEX</h3>
                                <p>We’ve taken a huge challenge and made it into our mission: To create an open financial system for the world. To achieve this, we are building a team of smart, creative, passionate optimists, the kind of people who see opportunity where others see roadblocks. If this sounds like you, <a href="https://angel.co/company/ice-holdings-1" target="_blank" rel="noopener noreferrer">check out our open roles.</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center justify-content-between py-5">
                        <div className="col-xl-6">
                            <div className="career-content py-5">
                                <h3>Our values</h3>
                                <p>Our values inform our behavior and the choices we make every day. As a result, our culture is a model of the world we’re trying to build: transparent, joyful, curious, and fast-moving. Our values are a large part of why BtcEX is a great place to work, and why we’ve been successful. They are much more than words to us (and we have the emojis to prove it).</p>
                            </div>
                        </div>
                        <div className="col-xl-5">
                            <div className="career-content-img">
                                <img className="img-fluid" src={require('./../../images/careers/values.jpg')} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center justify-content-between py-5">
                        <div className="col-xl-5">
                            <div className="career-content-img">
                                <img className="img-fluid" src={require('./../../images/careers/our_vision.png')} alt="" />
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="career-content py-5">
                                <h3>Our mission</h3>
                                <p>We think achieving our mission is the highest leverage way to bring about more economic freedom, innovation, efficiency, and equality of opportunity in the world. Each member of our team—every engineer, designer, kitchen team member, lawyer, writer, support coordinator, recruiter, and product manager—plays an important role in helping us achieve our mission.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="choose-team section-padding">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-6">
                            <div className="section-title text-center">
                                <h2>Choose your team</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-12 col-xxl-12">
                            <div id="accordion-faq" className="accordion">
                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="mb-0 collapsed c-pointer" data-toggle="collapse" data-target="#collapseOne1">
                                            <i className="fa"></i>Business Development & Sales
                                        </h4>
                                    </div>
                                    <div id="collapseOne1" className="collapse show" data-parent="#accordion-faq">
                                        <div className="card-body">
                                            <div>
                                                <h5 className="text-primary">
                                                    <a href="https://angel.co/company/ice-holdings-1/jobs/685601-business-development" target="_blank" rel="noopener noreferrer">Business Development</a>
                                                </h5>
                                                <span>Remote</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="mb-0 collapsed c-pointer" data-toggle="collapse" data-target="#collapseTwo2">
                                            <i className="fa"></i>Engineering
                                        </h4>
                                    </div>
                                    <div id="collapseTwo2" className="collapse show" data-parent="#accordion-faq">
                                        <div className="card-body">
                                            <div>
                                                <h5 className="text-primary">
                                                    <a href="https://angel.co/company/ice-holdings-1/jobs/662830-front-end-developer" target="_blank" rel="noopener noreferrer">Frontend Developer</a>
                                                </h5>
                                                <span>Remote</span>
                                            </div>
                                            <div className="mt-1">
                                                <h5 className="text-primary">
                                                    <a href="https://angel.co/company/ice-holdings-1/jobs/413629-back-end-developer" target="_blank" rel="noopener noreferrer">Backend Developer</a>
                                                </h5>
                                                <span>Remote</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <div className="card">
                                    <div className="card-header">
                                        <h4 className="mb-0 collapsed c-pointer" data-toggle="collapse" data-target="#collapseThree3">
                                            <i className="fa"></i>Marketing & Communications
                                        </h4>
                                    </div>
                                    <div id="collapseThree3" className="collapse" data-parent="#accordion-faq">
                                        <div className="card-body">
                                            <div>
                                                <h5 className="text-primary">Head of Product and Performance Marketing</h5>
                                                <span>San Francisco, CA</span>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Bottom />

            <Footer1 />
        </>
    )
}

export default Career;