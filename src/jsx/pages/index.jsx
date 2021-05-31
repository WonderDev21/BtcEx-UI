import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Header1 from './../layout/header1';
import Footer1 from './../layout/footer1';
import Bottom from './../element/bottom';
// import BtcChart from '../charts/btc';
// import DashChart from '../charts/dash';
// import EosChart from '../charts/eos';
// import EthChart from '../charts/eth';
// import LtcChart from '../charts/ltc';
import Chart from '../charts/index';
// import UsdChart from '../charts/usd';
// import XrpChart from '../charts/xrp';
// import XtzChart from '../charts/xtz';
// import Testimonial from '../element/testimonial';
import Blogs from '../element/Blogs';
import AppConstants from '../../constants/AppConstants';

function Homepage() {
	const { t } = useTranslation();
	const [blogs, setBlogs] = useState([]);
	const [trades, setTrades] = useState({});
	useEffect(() => {
		document.title = "BtcEX | Home";
		fetch('https://blog.btcex.pro/ghost/api/v3/content/posts/?key=5eaafdd854882ab2ab457d5bdc&limit=3&include=authors')
			.then(r => r.json())
			.then((data) => setBlogs(data));
	}, []);
	useEffect(() => {
		fetch('/api/alltrades')
			.then(r => r.json())
			.then((data) => setTrades(data));
	}, []);
	return (
		<>
			<Header1 />
			<div className="intro">
				<div className="container">
					<div className="row justify-content-between align-items-center">
						<div className="col-xl-6 col-lg-6 col-12">
							<div className="intro-content">
								<h1>{t('trade with')}
									&nbsp;<strong className="text-primary">{t(AppConstants.APP_NAME)}</strong>.
									<br />
									{t('buy and sell')}
								</h1>
								<p>{t('buy sell info')}</p>
							</div>
							<div className="intro-btn">
								<Link to="/signup" >
									<button className="btn btn-primary">
										{t('getstarted')}
									</button>
								</Link>
								<a href="/market" className="btn btn-outline-primary">{t('browse')}</a>
							</div>
						</div>
						<div className="col-xl-6 col-lg-6 col-12">
							<img alt="Exchange"
								className="hero-image"
								src={require('./../../images/exchange-light.png')}
							/>
						</div>

					</div>
				</div>
			</div>

			<div className="price-grid section-padding">
				<div className="container">
					<div className="row">
						<div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
							<div className="card">
								<div className="card-header">
									<div className="media">
										<span><i className="cc BTC"></i></span>
										<div className="media-body">
											Bitcoin
										</div>
									</div>
									<p className="mb-0">24h</p>
								</div>
								<div className="card-body">
									<Chart chartId="btc-chart" trades={trades.BTC} />
								</div>
							</div>
						</div>

						<div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
							<div className="card">
								<div className="card-header">
									<div className="media">
										<span><i className="cc LTC"></i></span>
										<div className="media-body">Litecoin</div>
									</div>
									<p className="mb-0"> 24h</p>
								</div>
								<div className="card-body">
									<Chart chartId="ltc-chart" trades={trades.LTC} />
								</div>
							</div>
						</div>

						<div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
							<div className="card">
								<div className="card-header">
									<div className="media">
										<span><i className="cc ETH"></i></span>
										<div className="media-body">Ethereum</div>
									</div>
									<p className="mb-0"> 24h</p>
								</div>
								<div className="card-body">
									<Chart chartId="eth-chart" trades={trades.ETH} />
								</div>
							</div>
						</div>

						<div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
							<div className="card">
								<div className="card-header">
									<div className="media">
										<span><i className="cc XRP"></i></span>
										<div className="media-body">Ripple</div>
									</div>
									<p className="mb-0"> 24h</p>
								</div>
								<div className="card-body">
									<Chart chartId="xrp-chart" trades={trades.XRP} />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="getstart section-padding">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-xl-8">
							<div className="section-title">
								<h2>{t('get-started-now.header')}</h2>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
							<div className="getstart-content">
								<span><i className="la la-user-plus"></i></span>
								<h3>{t('get-started-now.step-1')}</h3>
							</div>
						</div>
						<div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
							<div className="getstart-content">
								<span><i className="la la-bank"></i></span>
								<h3>{t('get-started-now.step-2')}</h3>
							</div>
						</div>
						<div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
							<div className="getstart-content">
								<span><i className="la la-exchange"></i></span>
								<h3>{t('get-started-now.step-3')}</h3>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* PORTFOLIO SECTION */}
			<div className="portfolio section-padding" data-scroll-index="2">
				<div className="container">
					<div className="row py-lg-5 justify-content-center">
						<div className="col-xl-7">
							<div className="section-title text-center">
								<h2>{t('portfolio.header')}</h2>
								<p>{t('portfolio.description')}</p>
							</div>
						</div>
					</div>
					<div className="row align-items-center justify-content-between">
						<div className="col-xl-7 col-lg-6">
							<div className="portfolio_list">
								<div className="row">
									<div className="col-xl-6">
										<div className="media">
											<span className="port-icon"> <i className="la la-bar-chart"></i></span>
											<div className="media-body">
												<h4>{t('portfolio.media.0.header')}</h4>
												<p>{t('portfolio.media.0.description')}</p>
											</div>
										</div>
									</div>
									<div className="col-xl-6">
										<div className="media">
											<span className="port-icon"> <i className="la la-calendar-check-o"></i></span>
											<div className="media-body">
												<h4>{t('portfolio.media.1.header')}</h4>
												<p>{t('portfolio.media.1.description')}</p>
											</div>
										</div>
									</div>
									<div className="col-xl-6">
										<div className="media">
											<span className="port-icon"> <i className="la la-lock"></i></span>
											<div className="media-body">
												<h4>{t('portfolio.media.2.header')}</h4>
												<p>{t('portfolio.media.2.description')}</p>
											</div>
										</div>
									</div>
									<div className="col-xl-6">
										<div className="media">
											<span className="port-icon"> <i className="la la-mobile"></i></span>
											<div className="media-body">
												<h4>{t('portfolio.media.3.header')}</h4>
												<p>{t('portfolio.media.3.description')}</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-xl-5 col-lg-6">
							<div className="portfolio_img">
								<img src={require('./../../images/portfolio.png')} alt="" className="img-fluid" />
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="trade-app section-padding">
				<div className="container">
					<div className="row">
						<div className="col-xl-12">
							<div className="trusted-business py-5 text-center">
								<h2>{t('news-media')}</h2>
							</div>
							<div className="row justify-content-center">
								<div className="col-auto">
									<div className="trusted-logo">
										<a target="_blank" rel="noopener noreferrer" href="https://finance.yahoo.com/news/0-trade-commission-offer-bug-050209411.html">
											<img className="img-news" height="47px" src={require('./../../images/promo/yahoo.png')} alt="yahoo" />
										</a>
									</div>
								</div>
								<div className="col-auto">
									<div className="trusted-logo">
										<a target="_blank" rel="noopener noreferrer" href="https://www.latestly.com/auto/0-trade-commission-offer-a-bug-bounty-and-more-on-the-launch-of-btcex-1835018.html">
											<img className="img-news" src={require('./../../images/promo/latestly.png')} alt="latestly" />
										</a>
									</div>
								</div>
								<div className="col-auto">
									<div className="trusted-logo">
										<a target="_blank" rel="noopener noreferrer" href="https://www.bitcoininsider.org/article/89446/read-you-choose-cryptocurrency-exchange-invest">
											<img className="img-news" height="47px" src={require('./../../images/promo/bitcoininsider.png')} alt="bitcoininsider" />
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="promo section-padding">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-xl-8">
							<div className="section-title text-center">
								<h2>{t('trusted.header')}</h2>
								<p>{t('trusted.description')}</p>
							</div>
						</div>
					</div>
					<div className="row align-items-center py-5">
						<div className="col-xl-4 col-lg-4 col-md-4">
							<div className="promo-content">
								<div className="promo-content-img">
									<img className="img-fluid" src={require('./../../images/svg/protect.svg')} alt="" />
								</div>
								<h3>{t('trusted.reasons.0.heading')}</h3>
								<p>{t('trusted.reasons.0.description')}</p>
							</div>
						</div>
						<div className="col-xl-4 col-lg-4 col-md-4">
							<div className="promo-content">
								<div className="promo-content-img">
									<img className="img-fluid" src={require('./../../images/svg/cyber.svg')} alt="" />
								</div>
								<h3>{t('trusted.reasons.1.heading')}</h3>
								<p>{t('trusted.reasons.1.description')}</p>
							</div>
						</div>
						<div className="col-xl-4 col-lg-4 col-md-4">
							<div className="promo-content">
								<div className="promo-content-img">
									<img className="img-fluid" src={require('./../../images/svg/finance.svg')} alt="" />
								</div>
								<h3>{t('trusted.reasons.2.heading')}</h3>
								<p>{t('trusted.reasons.2.description')}</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="blog section-padding">
				<Blogs posts={blogs.posts} />
			</div>

			<div className="get-touch section-padding">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-xl-6">
							<div className="section-title">
								<h2>{t('get-touch.heading')}</h2>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-xl-6 col-lg-6 col-md-6">
							<div className="get-touch-content">
								<div className="media">
									<span><i className="fa fa-shield"></i></span>
									<div className="media-body">
										<h4>{t('get-touch.contents.0.heading')}</h4>
										<p>{t('get-touch.contents.0.description')}</p>
									</div>
								</div>
							</div>
						</div>
						<div className="col-xl-6 col-lg-6 col-md-6">
							<div className="get-touch-content">
								<div className="media">
									<span><i className="fa fa-cubes"></i></span>
									<div className="media-body">
										<h4>{t('get-touch.contents.1.heading')}</h4>
										<p>{t('get-touch.contents.1.description')}</p>
									</div>
								</div>
							</div>
						</div>
						<div className="col-xl-6 col-lg-6 col-md-6">
							<div className="get-touch-content">
								<div className="media">
									<span><i className="fa fa-certificate"></i></span>
									<div className="media-body">
										<h4>{t('get-touch.contents.2.heading')}</h4>
										<p>{t('get-touch.contents.2.description')}</p>
									</div>
								</div>
							</div>
						</div>
						<div className="col-xl-6 col-lg-6 col-md-6">
							<div className="get-touch-content">
								<div className="media">
									<span><i className="fa fa-life-ring"></i></span>
									<div className="media-body">
										<h4>{t('get-touch.contents.3.heading')}</h4>
										<p>{t('get-touch.contents.3.description')}</p>
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

export default Homepage;