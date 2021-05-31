import React, { } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


export default () => {
	const { t } = useTranslation();
	return (
		<>
			<div className="bottom section-padding">
				<div className="container">
					<div className="row">
						<div className="col-xl-4 col-lg-4 col-md-12 col-sm-6">
							<div className="bottom-logo">
								<img className="pb-3" style={{ maxWidth: '115px' }} src={require('./../../images/logo.png')} alt="BtcEX" />
								<p>{t('bottom.title')}</p>
							</div>
						</div>
						<div className="col-xl-2 col-lg-2 col-md-6 col-sm-6">
							<div className="bottom-widget">
								<h4 className="widget-title">{t('bottom.company')}</h4>
								<ul>
									<li><Link to="/about">{t('bottom.about')}</Link></li>
									<li><Link to="/careers">{t('bottom.career')}</Link></li>
									<li><Link to="/terms-condition">{t('bottom.terms')}</Link></li>
									<li><a target="_blank" rel="noopener noreferrer" href="https://d2dxiksfrswv6n.cloudfront.net/BtcEX_WhitePaper.pdf">{t('bottom.whitepaper')}</a></li>
								</ul>
							</div>
						</div>
						<div className="col-xl-2 col-lg-2 col-md-6 col-sm-6">
							<div className="bottom-widget">
								<h4 className="widget-title">{t('bottom.support')}</h4>
								<ul>
									<li><a
										rel="noopener noreferrer"
										target="_blank"
										href="https://blog.btcex.pro">{t('blog')}</a></li>
									<li><a
										target="_blank"
										rel="noopener noreferrer"
										href="https://btcex.freshdesk.com">{t('bottom.faq')}</a></li>
									<li><a rel="noopener noreferrer"
										target="_blank"
										href="https://btcex.freshdesk.com">{t('bottom.helpdesk')}</a></li>
									<li><Link to={'#'}>{t('bottom.ticket')}</Link></li>
								</ul>
							</div>
						</div>
						<div className="col-xl-2 col-lg-2 col-md-6 col-sm-6">
							<div className="bottom-widget">
								<h4 className="widget-title">{t('bottom.information')}</h4>
								<ul>
									<li><Link to="/assets">{t('bottom.assets')}</Link></li>
									<li><Link to="/fees">{t('bottom.fees')}</Link></li>
									<li><Link to="/refund-policy">{t('bottom.refund-policy')}</Link></li>
									<li><Link to="/symbol-details">{t('bottom.symbol-details')}</Link></li>
								</ul>
							</div>
						</div>
						<div className="col-xl-2 col-lg-2 col-md-6 col-sm-6">
							<div className="bottom-widget">
								<h4 className="widget-title">{t('bottom.service')}</h4>
								<ul>
									<li><a href="/market">{t('bottom.exchange')}</a></li>
									<li><a href="/ieo">{t('bottom.ieo')}</a></li>
									<li><a href="https://docs.google.com/forms/d/1O05THBRhKHtLYFQ54RysKZdC63FQzLO7_twE4YUrXgA/edit?ts=5f87ccf5&gxids=7628" target="_blank" rel="noopener noreferrer">{t('bottom.token-listing')}</a></li>
									<li><a href="/market" target="_blank" rel="noopener noreferrer">{t('bottom.staking')}</a></li>
									<li><a rel="noopener noreferrer" target="_blank" href="https://btcex.freshdesk.com">{t('bottom.white-label')}</a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
