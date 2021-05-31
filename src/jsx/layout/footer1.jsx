import React, { } from 'react';
import { Link } from 'react-router-dom';

export default () => (
	<>
		<div className="footer">
			<div className="container">
				<div className="row">
					<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
						<div className="copyright">
							<p>© Copyright {new Date().getFullYear()} <Link to={'#'}>Ice Holdings Limited.</Link> | All Rights Reserved</p>
						</div>
					</div>
					<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
						<div className="footer-social">
							<ul>
								<li><a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/btcexpro/"><i className="fa fa-facebook"></i></a></li>
								<li><a target="_blank" rel="noopener noreferrer" href="https://twitter.com/BtcExPro"><i className="fa fa-twitter"></i></a></li>
								<li><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/company/btcex/"><i className="fa fa-linkedin"></i></a></li>
								<li><a target="_blank" rel="noopener noreferrer" href="https://t.me/BtcEXpro"><i className="fa fa-telegram"></i></a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</>
)
