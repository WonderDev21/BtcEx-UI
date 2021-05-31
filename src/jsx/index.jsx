import React, { Suspense, lazy } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Loader from './element/loader';
/** Use this Route component To check authentication */
import PrivateRoute from './privateRoutes';

const Homepage = lazy(() => import('./pages/index'));
const Signup = lazy(() => import('./pages/signup'));
const Signin = lazy(() => import('./pages/signin'));
const Reset = lazy(() => import('./pages/reset'));
const LoginVerification = lazy(() => import('./pages/otp-2'));
const VerifySignup = lazy(() => import('./pages/verify-signup'));
const About = lazy(() => import('./pages/about'));
const TermsCondition = lazy(() => import('./pages/terms-condition'));
const RefundPolicy = lazy(() => import('./pages/refund-policy'));
const Fees = lazy(() => import('./pages/fees'));
const SymbolDetails = lazy(() => import('./pages/symbol-details'));
const Assets = lazy(() => import('./pages/assets'));
const Career = lazy(() => import('./pages/career'));
const Deposit = lazy(() => import('./pages/transactions/deposit'));
const Request = lazy(() => import('./pages/transactions/request'));
const Statement = lazy(() => import('./pages/transactions/statement'));
const Withdrawal = lazy(() => import('./pages/transactions/withdrawal'));
const Settings = lazy(() => import('./pages/settings'));
const Preferences = lazy(() => import('./pages/settings-preferences'));
const SettingsSecurity = lazy(() => import('./pages/settings-security'));
const SettingsAccount = lazy(() => import('./pages/settings-account'));
const Accounts = lazy(() => import('./pages/accounts'));
const ChangePassword = lazy(() => import('./pages/change-password'));
// const Otp1 = lazy(() => import('./pages/otp-1'));
// const Homepage2 = lazy(() => import('./pages/index2'));
// const Price = lazy(() => import('./pages/price'));
// const Wallet = lazy(() => import('./pages/wallet'));
// const Team = lazy(() => import('./pages/team'));
// const Blog = lazy(() => import('./pages/blog'));
// const BlogSingle = lazy(() => import('./pages/blog-single'));
// const Contact = lazy(() => import('./pages/contact'));
// const HelpDesk = lazy(() => import('./pages/helpdesk'));
// const Faq = lazy(() => import('./pages/faq'));
// const Dashboard = lazy(() => import('./pages/dashboard'));
// const BuySell = lazy(() => import('./pages/buy-sell'));
// const AddBankAccount = lazy(() => import('./pages/add-bank-acc'));
// const AddDebitCard = lazy(() => import('./pages/add-debit-card'));
// const Locked = lazy(() => import('./pages/lock'));
// const VerifyStep1 = lazy(() => import('./pages/verify-step-1'));
// const VerifyStep2 = lazy(() => import('./pages/verify-step-2'));
// const VerifyStep3 = lazy(() => import('./pages/verify-step-3'));
// const VerifyStep4 = lazy(() => import('./pages/verify-step-4'));
// const VerifyStep5 = lazy(() => import('./pages/verify-step-5'));
// const VerifyStep6 = lazy(() => import('./pages/verify-step-6'));
// const History = lazy(() => import('./pages/history'));
// const Demo = lazy(() => import('./pages/demo'));

const Notfound = lazy(() => import('./pages/not-found'));

const Index = () => (
	<div id="main-wrapper">
		<Suspense fallback={<Loader />}>
			<Switch>
				<Route exact path='/' component={Homepage} />
				<Route path='/signin' component={Signin} />
				<Route path='/signup' component={Signup} />
				<Route path='/otp-2' component={LoginVerification} />
				<Route path='/reset' component={Reset} />
				<Route path='/verify' component={VerifySignup} />
				<Route path='/about' component={About} />
				<Route path='/terms-condition' component={TermsCondition} />
				<Route path='/refund-policy' component={RefundPolicy} />
				<Route path='/fees' component={Fees} />
				<Route path='/symbol-details' component={SymbolDetails} />
				<Route path='/assets' component={Assets} />
				<Route path='/careers' component={Career} />
				<PrivateRoute path='/transactions/deposit' component={Deposit} />
				<PrivateRoute path='/transactions/request' component={Request} />
				<PrivateRoute path='/transactions/statement' component={Statement} />
				<PrivateRoute path='/transactions/withdrawal' component={Withdrawal} />
				<PrivateRoute path='/settings' component={Settings} />
				<PrivateRoute path='/settings-preferences' component={Preferences} />
				<PrivateRoute path='/settings-security' component={SettingsSecurity} />
				<PrivateRoute path='/settings-account' component={SettingsAccount} />
				<PrivateRoute path='/wallets' component={Accounts} />
				<PrivateRoute path='/change-password' component={ChangePassword} />
				{/* 
					<Route path='/index2' component={Homepage2} />
					<Route path='/price' component={Price} />
					<Route path='/otp-1' component={Otp1} />
					<Route path='/wallet' component={Wallet} />
					<Route path='/team' component={Team} />
					<Route path='/blog' component={Blog} />
					<Route path='/blog-single' component={BlogSingle} />
					<Route path='/contact' component={Contact} />
					<Route path='/helpdesk' component={HelpDesk} />
					<Route path='/faq' component={Faq} />
					<Route path='/dashboard' component={Dashboard} />
					<Route path='/buy-sell' component={BuySell} />
					<Route path='/add-bank-acc' component={AddBankAccount} />
					<Route path='/add-debit-card' component={AddDebitCard} />
					<Route path='/lock' component={Locked} />
				*/}
				<Route path="/404" component={Notfound} />
				<Route path="*" render={() => <Redirect to="/404" />} />
			</Switch>
		</Suspense>
	</div>
);

export default Index;