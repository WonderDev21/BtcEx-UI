import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Alert, Card, Button } from 'react-bootstrap';
import { get } from 'lodash';
import BigNumber from 'bignumber.js';
// import { Link } from 'react-router-dom';

import Header2 from '../layout/header2';
import Sidebar from '../layout/sidebar';
import PageTitle from '../element/page-title';
import Footer2 from '../layout/footer2';
import RewardModal from './accountComponents/reward-modal';
import DepositModal from './accountComponents/deposit-modal';
import WithdawalModal from './accountComponents/withdrawal-modal';
import { exchangeRateRequest, priceRequest, tickerRequest } from '../../actions/accounts/index';
import { getCryptoSummaryRequest } from '../../actions/cryptoSummary/index';
import { fetchTradeFees } from '../../actions/app/index';

function Accounts() {
	const [showRewardModal, setRewardModal] = useState(false);
	const [type, setType] = useState('');
	const [selectedCurrency, setSelectedCurrency] = useState('');
	const [currencyValue, setCurrencyValue] = useState('');
	const [showDepositModal, setDepositModal] = useState(false);
	const [showWithdrawalModal, setWithdrawalModal] = useState(false);

	const { auth, ticker, cryptoSummary, feeStructure } = useSelector(state => ({ auth: state.auth, ticker: state.ticker, cryptoSummary: state.cryptoSummary, feeStructure: state.app.feeStructure }));
	const { accounts = [] } = auth;
	const { currencyRates: rates = {}, conversionRate, exchangePrice } = ticker;
	const baseCurrencySymbol = get(ticker, 'baseCurrency.symbol_native', '$');
	const exchangePriceLength = Object.keys(exchangePrice).length;
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(priceRequest());
		dispatch(exchangeRateRequest());
		dispatch(getCryptoSummaryRequest());
		dispatch(fetchTradeFees());
	}, [dispatch]);
	
	useEffect(() => {
		if (exchangePriceLength) {
			dispatch(tickerRequest());
		}
	}, [dispatch, exchangePriceLength])

	const handleDepositModal = (event) => {
		const { dataset: { currency, value }, name } = event.target;
		setType(name);
		setSelectedCurrency(currency);
		setCurrencyValue(value);
		setDepositModal(true);
	}

	const handleWithdrawalModal = (event) => {
		const { dataset: { currency, value }, name } = event.target;
		console.log(currency, value, name);
		setType(name);
		setSelectedCurrency(currency);
		setCurrencyValue(value);
		setWithdrawalModal(true);
	}

	const handleReset = () => {
		setType(''); 
		setSelectedCurrency('');
		setCurrencyValue('');
		setDepositModal(false);
		setWithdrawalModal(false);
	}

	// console.log(accounts)
	return (
		<>
			<Header2 />
			<Sidebar />
			<PageTitle />

			<div className="content-body">
				<div className="container-fluid">
					<div className="row">
						<div className="col-xl-12">
							<Alert variant="success">
								To get the 50 BXC joining bonus, please complete the KYC and complete at least one trade. <span className="text-primary" style={{ cursor: "pointer" }} onClick={() => setRewardModal(true)}>Read More...</span>
							</Alert>
						</div>
						<div className="col-xl-12">
							{showRewardModal && <RewardModal isOpen={showRewardModal} onClose={() => setRewardModal(false)} />}
							{
								showDepositModal && <DepositModal 
									isOpen={showDepositModal}
									type={type}
									currency={selectedCurrency}
									currencyValue={currencyValue}
									onClose={handleReset}
									feeStructure={feeStructure} />
							}
							{
								showWithdrawalModal && <WithdawalModal
									isOpen={showWithdrawalModal}
									type={type}
									currency={selectedCurrency}
									currencyValue={currencyValue}
									onClose={handleReset}
									feeStructure={feeStructure} />
							}
						</div>
						<div className="col-xl-12 mt-3 mb-3">
							<h3>Wallets</h3>
						</div>
					</div>
					<div className="row d-none d-lg-block">
						<div className="col-xl-12">
							<div className="transaction-table">
								<div className="table-responsive">
									<table className="table mb-0 table-responsive-sm">
										<tbody>
											{
												accounts.map((account, index) => {
													const currentPrice = get(rates, `[${account.currency}].price`, 0);
													let usersCoinPrice = (new BigNumber(currentPrice)).multipliedBy(account.value).toNumber();
													if (account.currency === "INR" && conversionRate[account.currency]) {
														usersCoinPrice = (new BigNumber(account.value)).dividedBy(conversionRate[account.currency]).toNumber();
													} else if (account.currency === "BXC" && cryptoSummary.USDT_BXC) {
														usersCoinPrice = (new BigNumber(cryptoSummary.USDT_BXC.last)).multipliedBy(account.value).toNumber();
													}
													return (
														<tr key={index}>
															<td><i className={`cc ${account.currency}`}></i>	{account.currency} Balance</td>
															<td className="text-success text-right">{parseFloat(account.value).toFixed(8)}</td>
															<td className="text-primary">{` ≈ ${baseCurrencySymbol} ${parseFloat(usersCoinPrice).toFixed(2)}`}</td>
															<td className="text-right"><Button variant="success" size="xs" name="withdraw" data-currency={account.currency} data-value={account.value} onClick={handleWithdrawalModal}>Withdraw</Button></td>
															<td><Button variant="primary" size="xs" name="deposit" data-currency={account.currency} data-value={account.value} onClick={handleDepositModal}>Deposit</Button></td>
														</tr>
													);
												})
											}
										</tbody>
									</table>
								</div>
							</div>
						</div>
					</div>
					<div className="row d-lg-none">
						{
							accounts.map((account, index) => {
								const currentPrice = get(rates, `[${account.currency}].price`, 0);
								let usersCoinPrice = (new BigNumber(currentPrice)).multipliedBy(account.value).toNumber();
								if (account.currency === "INR" && conversionRate[account.currency]) {
									usersCoinPrice = (new BigNumber(account.value)).dividedBy(conversionRate[account.currency]).toNumber();
								} else if (account.currency === "BXC" && cryptoSummary.USDT_BXC) {
									usersCoinPrice = (new BigNumber(cryptoSummary.USDT_BXC.last)).multipliedBy(account.value).toNumber();
								}
								return (
									<div className="col-xl-3 col-lg-4 col-md-6 col-sm-12" key={index}>
										<Card border="light border">
											<Card.Header as="h4"><i className={`cc ${account.currency}`}></i>&nbsp; {account.currency} Balance</Card.Header>
											<Card.Body>
												<Card.Text>
													<span className="text-success text-right">{parseFloat(account.value).toFixed(8)}</span>
													<span className="text-primary">{` ≈ ${baseCurrencySymbol} ${parseFloat(usersCoinPrice).toFixed(2)}`}</span>
												</Card.Text>
											</Card.Body>
											<Card.Footer style={{ display: "flex", justifyContent: "space-between", padding: "0.35rem" }}>
												<Button variant="success" size="sm" name="withdraw" data-currency={account.currency} onClick={handleWithdrawalModal}>Withdraw</Button>&nbsp;
													<Button variant="primary" size="sm" name="deposit" data-currency={account.currency} onClick={handleDepositModal}>Deposit</Button>
											</Card.Footer>
										</Card>
									</div>
								);
							})
						}
					</div>
				</div>
			</div>

			<Footer2 />
		</>
	)
}

export default Accounts;