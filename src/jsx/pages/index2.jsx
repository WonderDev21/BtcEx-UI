import React, { } from 'react';
 import { Link } from 'react-router-dom';
// import { Row, Col, Card } from 'react-bootstrap'
import Header1 from './../layout/header1';
import Footer1 from './../layout/footer1';
import Bottom from './../element/bottom';



function Homepage2() {

    return (
        <><Header1 />
            <div className="intro2" id="intro" data-scroll-index="0">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-7 col-lg-12">
                            <div className="intro-content text-center">
                                <h1>Buy and sell cryptocurrency</h1>
                                <p>Fast and secure way to purchase or exchange 150+ cryptocurrencies</p>
                                <div className="intro-form">
                                    <form action="#">
                                        <input type="text" className="form-control" placeholder="Subscribe Now" />
                                        <button type="submit">
                                            <i className="la la-arrow-right first"></i>
                                            <i className="la la-arrow-right second"></i>
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="exchange-form">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-xl-7 col-lg-7">
                            <div className="intro-form-exchange">
                                <form method="post" name="myform" className="currency_validate">
                                    <div className="form-group">
                                        <label className="mr-sm-2">Send</label>
                                        <div className="input-group mb-3">
                                            <select name='currency' className="form-control">
                                                <option data-display="Bitcoin" value="bitcoin">Bitcoin</option>
                                                <option value="litecoin">Litecoin</option>
                                            </select>
                                            <input type="text" name="usd_amount" className="form-control" value="125.00 USD" />
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label className="mr-sm-2">Get</label>
                                        <div className="input-group mb-3">
                                            <select name='currency' className="form-control">
                                                <option data-display="Bitcoin" value="bitcoin">Bitcoin</option>
                                                <option value="litecoin">Litecoin</option>
                                            </select>
                                            <input type="text" name="usd_amount" className="form-control" value="125.00 USD" />
                                        </div>
                                        <div className="d-flex justify-content-between mt-0 align-items-center">
                                            <p className="mb-0">Monthly Limit</p>
                                            <h6 className="mb-0">$49750 remaining</h6>
                                        </div>
                                    </div>
                                    <Link to={'./signin'} type="submit" name="submit" className="btn btn-success btn-block">
                                        Exchange Now
                                    <i className="la la-arrow-right"></i>
                                    </Link>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="market section-padding page-section" data-scroll-index="1">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-8">
                            <div className="section-title text-center">
                                <h2>The World's Leading Cryptocurrency Exchange</h2>
                                <p>Trade Bitcoin, ETH, and hundreds of other cryptocurrencies in minutes.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="market-table">
                                <div className="table-responsive">
                                    <table className="table mb-0 table-responsive-sm table-striped">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Name</th>
                                                <th>Price</th>
                                                <th>Change</th>
                                                <th>Chart</th>
                                                <th>Trade</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td className="coin_icon">
                                                    <i className="cc BTC"></i>
                                                    <span>Bitcoin <b>BTC</b></span>
                                                </td>

                                                <td>
                                                    USD 680,175.06
                                            </td>
                                                <td>
                                                    <span className="text-success">+1.13%</span>
                                                </td>
                                                <td> <span className="sparkline8"></span></td>
                                                <td><Link to={'#'} className="btn btn-success">Buy</Link></td>
                                            </tr>
                                            <tr>
                                                <td>2
                                            </td>
                                                <td className="coin_icon">
                                                    <i className="cc ETH"></i>
                                                    <span>Ethereum <b>ETH</b></span>
                                                </td>

                                                <td>
                                                    USD 680,175.06
                                            </td>
                                                <td>
                                                    <span className="text-success">+1.13%</span>
                                                </td>
                                                <td> <span className="sparkline8"></span></td>
                                                <td><Link to={'#'} className="btn btn-success">Buy</Link></td>
                                            </tr>
                                            <tr>
                                                <td>3
                                            </td>
                                                <td className="coin_icon">
                                                    <i className="cc BCH-alt"></i>
                                                    <span>Bitcoin Cash <b>BCH</b></span>
                                                </td>

                                                <td>
                                                    USD 680,175.06
                                            </td>
                                                <td>
                                                    <span className="text-success">+1.13%</span>
                                                </td>
                                                <td> <span className="sparkline8"></span></td>
                                                <td><Link to={'#'} className="btn btn-success">Buy</Link></td>
                                            </tr>
                                            <tr>
                                                <td>4
                                            </td>
                                                <td className="coin_icon">
                                                    <i className="cc LTC"></i>
                                                    <span>Litecoin <b>LTC</b></span>
                                                </td>

                                                <td>
                                                    USD 680,175.06
                                            </td>
                                                <td>
                                                    <span className="text-danger">-0.47%</span>
                                                </td>
                                                <td> <span className="sparkline8"></span></td>
                                                <td><Link to={'#'} className="btn btn-success">Buy</Link></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="info ">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-2 col-lg-4 col-md-4 col-sm-6">
                            <div className="info-content">
                                <span><i className="la la-shield"></i></span>
                                <h4>Best rates on the market</h4>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-4 col-md-4 col-sm-6">
                            <div className="info-content">
                                <span><i className="la la-cubes"></i></span>
                                <h4>Transparent 0.25% fee</h4>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-4 col-md-4 col-sm-6">
                            <div className="info-content">
                                <span><i className="la la-clock-o"></i></span>
                                <h4>5-30 min transactions</h4>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-4 col-md-4 col-sm-6">
                            <div className="info-content">
                                <span><i className="la la-exchange"></i></span>
                                <h4>High exchange limits</h4>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-4 col-md-4 col-sm-6">
                            <div className="info-content">
                                <span><i className="la la-support"></i></span>
                                <h4>24/7 live chat support</h4>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-4 col-md-4 col-sm-6">
                            <div className="info-content">
                                <span><i className="la la-support"></i></span>
                                <h4>24/7 live chat support</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="product-feature section-padding">
                <div className="container">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-xl-5 col-lg-6">
                            <div className="section-title">
                                <h2 className="text-left">24-hour statistics</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere odit fuga nesciunt
                                similique rerum nulla asperiores ullam deserunt architecto inventore.</p>
                            </div>
                            <div className="product-feature-content">
                                <div className="row">
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                        <div className="product-feature-text">
                                            <h4><span><i className="fa fa-shield"></i></span> 27 %</h4>
                                            <p>New users</p>
                                        </div>
                                        <div className="product-feature-text">
                                            <h4><span><i className="fa fa-adjust"></i></span> 73 %</h4>
                                            <p>Regular users</p>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                        <div id="sparkline11"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <div className="row">
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                    <div className="product-feature-box">
                                        <span className="bg-primary"><i className="la la-exchange"></i></span>
                                        <h4>1900</h4>
                                        <p>Transactions made</p>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                    <div className="product-feature-box">
                                        <span className="bg-secondary"><i className="la la-trophy"></i></span>
                                        <h4>ETH-BTC</h4>
                                        <p>Today's champion pair</p>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                    <div className="product-feature-box">
                                        <span className="bg-success"><i className="la la-user"></i></span>
                                        <h4>27 150</h4>
                                        <p>Visits today</p>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                    <div className="product-feature-box">
                                        <span className="bg-info"><i className="la la-clock-o"></i></span>
                                        <h4>14.0 minutes</h4>
                                        <p>Average processing time</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="new-product section-padding">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-7">
                            <div className="section-title">
                                <h2>So, What brings new product today?</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6">
                            <div className="new-product-content">
                                <img className="img-fluid" src={require('./../../images/svg/api.svg')} alt="" />
                                <h4>Integrate our API</h4>
                                <p>A white-label solution for your project, whether it is a wallet, a marketplace or a
                                    service provider. Set it up to accept any of 140+ cryptocurrencies listed on Tradix
                                and get revenue for each transaction made.</p>
                                <Link to={'#'} className="btn btn-success px-4">Learn more</Link>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6">
                            <div className="new-product-content">
                                <img className="img-fluid" src={require('./../../images/svg/affiliate.svg')} alt="" />
                                <h4>Join our Affiliate Program</h4>
                                <p>Place an affiliate link or customizable widget on your website, blog or social media
                                    profile. Get 50% of our revenue from every transaction made via either of the tools
                                    used.
                            </p>
                                <Link to={'#'} className="btn btn-outline-success px-4">Become an affiliate</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="trust section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-4">
                            <div className="trust-content">
                                <span><i className="fa fa-shield"></i></span>
                                <h4>EASY</h4>
                                <p>Create an account, choose your crypto, input your receiving address, and send your funds
                            </p>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4">
                            <div className="trust-content">
                                <span><i className="fa fa-cubes"></i></span>
                                <h4>SAFE</h4>
                                <p>As a non-custodial exchange, we don’t hold your deposits, so your funds are never
                                vulnerable to hacks.</p>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4">
                            <div className="trust-content">
                                <span><i className="fa fa-life-ring"></i></span>
                                <h4>COMPETITIVE</h4>
                                <p>Our exchange rates are updated in real time. What you see is what you get--with no
                                additional fees.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="appss section-padding">
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-xl-5 col-lg-5 col-md-12">
                            <div className="appss-img">
                                <img className="img-fluid" src={require('./../../images/app2.png')} alt="" />
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-12">
                            <div className="appss-content">
                                <h3>Mobile app</h3>
                                <p>Get the best mobile app to exchange or buy crypto on the go:</p>
                                <ul>
                                    <li><i className="la la-check"></i> Best rates on the market</li>
                                    <li><i className="la la-check"></i> High limits</li>
                                    <li><i className="la la-check"></i> No verification for exchange transactions</li>
                                    <li><i className="la la-check"></i> More than 150 cryptocurrencies</li>
                                    <li><i className="la la-check"></i> Buy bitcoin | buy crypto with USD, EUR or GBP</li>
                                </ul>
                                <div className="mt-4">
                                    <Link to={'#'} className="btn btn-success my-1 waves-effect">
                                        <img src={require('./../../images/android.svg')} alt="" />
                                    </Link>
                                    <Link to={'#'} className="btn btn-success my-1 waves-effect">
                                        <img src={require('./../../images/apple.svg')} alt="" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="contact-form section-padding" data-scroll-index="4">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-7">
                            <div className="section-title text-center">
                                <span>Ask Question</span>
                                <h2>Let us hear from you directly!</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-4 col-md-4 col-sm-12">
                            <div className="info-list">
                                <h4 className="mb-3">Address</h4>
                                <ul>
                                    <li><i className="fa fa-map-marker"></i> California, USA</li>
                                    <li><i className="fa fa-phone"></i> (+880) 1243 665566</li>
                                    <li><i className="fa fa-envelope"></i> hello@example.com</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-8 col-md-8 col-sm-12">
                            <form method="post" name="myform" className="contact_validate">
                                <div className="row">
                                    <div className="col-12 col-md-6">
                                        <div className="form-group">
                                            <label>
                                                Full name
                                        </label>
                                            <input type="text" className="form-control" id="contactName" placeholder="Full name"
                                                name="firstname" />
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <div className="form-group">
                                            <label>
                                                Email
                                        </label>
                                            <input type="email" className="form-control" name="email"
                                                placeholder="hello@domain.com" />

                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="form-group">
                                            <textarea className="form-control p-3" name="message" rows="5"
                                                placeholder="Tell us what we can help you with!"></textarea>
                                        </div>
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-primary px-4 py-2">
                                    Send message
                            </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

           <Bottom />

            <Footer1 />

        </>
    )
}

export default Homepage2;