import React, {  } from 'react';
import { Link } from 'react-router-dom';
import { DropdownButton } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';

import { requestLogout } from "../../actions/auth/index";

function Header2() {

	const auth = useSelector(state => state.auth);
	const dispatch = useDispatch();

	return (
		<>
			<div className="header dashboard">
				<div className="container-fluid">
					<div className="row">
						<div className="col-xl-12">
							<nav className="navbar navbar-expand-lg navbar-light px-0 justify-content-between">
								<Link className="navbar-brand" to={'/'}><img src={require('./../../images/logo.png')} alt="" /></Link>

								<div className="dashboard_log my-2">
									<div className="d-flex align-items-center">
										<div className="account_money">
											<a href="/market">Market</a>
										</div>
										<div className="account_money">
											{/* <ul>
													<li className="crypto">
															<span>0.0025</span>
															<i className="cc BTC"></i>
													</li>
													<li className="usd">
															<span>19.93 USD</span>
													</li>
											</ul> */}
											<DropdownButton
												alignRight
												title="Transactions"
												className="profile_log d-none d-sm-block"
											>
												<Link to="/transactions/deposit" className="dropdown-item">
													Deposits
                        </Link>
												<Link to="/transactions/withdrawal" className="dropdown-item">
													Withdrawals
												</Link>
												<Link to="/transactions/statement" className="dropdown-item">
													Statements
												</Link>
												<Link to="/transactions/request" className="dropdown-item">
													Requests
												</Link>
											</DropdownButton>
										</div>

										<DropdownButton
											alignRight
											title={auth.fullName || "Johe Doe"}
											className="profile_log"
										>
											<Link to="/wallets" className="dropdown-item">
												<i className="la la-wallet"></i> Wallets
                      </Link>
											<Link to="/transactions/deposit" className="dropdown-item d-block d-sm-none">
												<i className="la la-file-invoice-dollar"></i> Transactions
                      </Link>
											<Link to="/settings" className="dropdown-item">
												<i className="la la-cog"></i> Settings
                      </Link>
											{/* <Link to={'./lock'} className="dropdown-item">
													<i className="la la-lock"></i> Lock
											</Link> */}
											<Link to="" className="dropdown-item logout" onClick={() => dispatch(requestLogout())}>
												<i className="la la-sign-out"></i> Logout
                      </Link>
										</DropdownButton>
									</div>
								</div>
							</nav>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Header2;