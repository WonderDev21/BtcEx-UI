import React, { useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { Row, Col, Card } from 'react-bootstrap'
import Header1 from './../layout/header1';
import Footer1 from './../layout/footer1';

import Bottom from '../element/bottom';



function About() {

    useEffect(() => {
        document.title = "BtcEX | About Us";
    }, []);

    return (
        <>
            <Header1 />
            <div className="about-one section-padding">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="service-img">
                                <img src={require('./../../images/about/about-us.jpg')} alt="" className="img-fluid" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="service-content m-t-50">
                                <h3>In Brief</h3>
                                <p>BtcEX is Hong Kong's leading cryptocurrency exchange provider since October 2016. We provide a secure, liquidity & stable banking solution platform to allow customers to trade safely and be able to quickly withdraw from the exchange.</p>
                                <p>Along with the fastest execution on our platform, we offer you a secure INR, USD & HKD and cryptocurrency deposit and withdrawal. The advanced charting tools will help you make informed trades. Your funds and tokens are safe with us and the deposits and withdrawals are processed using the most secure channel available.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="our-ceo py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="ceo-content">
                                <div className="media">
                                    {/* <img src={require('./../.././images/avatar/6.jpg')} alt="" className="img-fluid mr-4 rounded-circle" /> */}
                                    <div className="media-body">
                                        <h3>What can you expect from us?</h3>
                                        {/* <span>CEO of Tradix</span> */}
                                        <p className="mt-2">Quick and efficient trading. The orders are placed and matched actively in real time providing you the best overall trading experience. The order book is deep and the spreads are usually tight providing you the liquidity you seek with minimal slippage. The tick size and lot sizes are small, allowing you to trade every available opportunity.</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-two section-padding">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="service-content my-5">
                                <h3>Account and Wallet Security Practices</h3>
                                <p>Your account login is completely secured by two-step authentication.Your investment in digital coins are safely stored in our hardware wallets, the most secure way to store cryptocurrencies minimizing the risk of being hacked and stolen.</p>
                                <p>All coins transfers are processed in the most secure and fastest way possible.</p>
                                {/* <Link to={'#'} className="btn btn-primary">Read more</Link> */}
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="service-img">
                                <img src={require('./../../images/about/wallet.png')} alt="" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="our-ceo py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="ceo-content">
                                <div className="media">
                                    <div className="media-body">
                                        <h3>Low trading costs</h3>
                                        <p className="mt-2">The trading fees are minimal (0.2 % for Buyers and 0.2% for Sellers), including all taxes.Automatic trade bot is coming soon, which will allow you to scale your trading and profits.</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="our-ceo py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="service-img">
                                <div style={{ "--aspect-ratio": "16/9" }}>
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3071.1082834767444!2d114.1484710613193!3d22.34026679980283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34040751511e47b5%3A0xe2ee2e8fa2a6be16!2sTai%20Cheung%20Factory%20Building%2C%203%20Wing%20Ming%20St%2C%20Cheung%20Sha%20Wan%2C%20Hong%20Kong!5e0!3m2!1sen!2sin!4v1585586610487!5m2!1sen!2sin" width="550" height="450" title="office-location" frameBorder="0" style={{ border: 0 }} allowFullScreen="" className="img-fluid" aria-hidden="false" tabIndex="0"></iframe>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="ceo-content">
                                <div className="media">
                                    <div className="media-body">
                                        <h3>Contact Us</h3>
                                        <p className="mt-2">If you have any questions, please contact us through <a href="mailto:info@btcex.pro">info@btcex.pro</a></p>
                                    </div>
                                </div>
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

export default About;