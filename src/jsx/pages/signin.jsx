import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ReCAPTCHA from 'react-google-recaptcha';
import { Alert } from 'react-bootstrap';

import { requestLoginOTP } from '../../actions/auth/index';
import AppConstants from '../../constants/AppConstants';

const Signin = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [captcha, setCaptcha] = useState(null);
	const dispatch = useDispatch();

	const auth = useSelector(state => state.auth);
  const { isLoginFailed, errorMsg } = auth;

	useEffect(() => {
		document.title = "BtcEX | Signin";
	}, []);

	const handleFormValidation = () => {
		const errors = [];
		// eslint-disable-next-line no-useless-escape
		const emailRegex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
		if (!emailRegex.test(email)) {
			errors.push('Invalid Email Address!');
		}
		if (!password) {
			errors.push('Enter your password.');
		}
		if (captcha === '' || captcha === undefined || captcha === null) {
			errors.push('Please verify that you are human!');
		}
		return errors;
	}

	const handleSubmit = event => {
		event.preventDefault();
		const errors = handleFormValidation();
		if (errors.length) {
			alert(errors[0]);
			return;
		}
		dispatch(requestLoginOTP({ email, password, captcha }));
	}

	return (
		<>
			<div className="authincation">
				<div className="container h-100">
					<div className="row justify-content-center h-100 align-items-center">
						<div className="col-xl-5 col-md-6">
							<div className="mini-logo text-center my-5">
								<Link to={'./'}><img src={require('./../../images/logo.png')} width="120" alt="" /></Link>
							</div>
							<div className="auth-form card">
								<div className="card-header justify-content-center">
									<h4 className="card-title">Sign in</h4>
								</div>
								<div className="card-body">
									<form method="post" name="myform" className="signin_validate" action="#">
										<div className="form-group">
											<label>Email</label>
											<input type="email" className="form-control" placeholder="hello@example.com" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
										</div>
										<div className="form-group">
											<label>Password</label>
											<input type="password" className="form-control" placeholder="Password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
										</div>
										<div className="form-group">
											{/* <ReCAPTCHA sitekey={AppConstants.REACT_APP_RECAPTCHA_SITE_KEY} onChange={value => setCaptcha(value)} /> */}
										</div>
										<div className="form-row d-flex justify-content-between mt-4 mb-2">
											<div className="form-group mb-0">
												<label className="toggle">
													<input className="toggle-checkbox" type="checkbox" />
													<span className="toggle-switch"></span>
													<span className="toggle-label">Remember me</span>
												</label>
											</div>
											<div className="form-group mb-0">
												<Link to="/reset">Forgot Password?</Link>
											</div>
										</div>
										<div className="text-center">
											{ isLoginFailed ? <Alert variant="danger">{errorMsg || 'Something went wrong'}</Alert> : null}
											<button type="submit" className="btn btn-success btn-block" onClick={handleSubmit}>Sign in</button>
										</div>
									</form>
									<div className="new-account mt-3">
										<p>Don't have an account? <Link className="text-primary" to="/signup">Sign up</Link></p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
/*
class Signin2 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
			captcha: null,
		};
		document.title = "BtcEX | Signin";
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleCaptcha = this.handleCaptcha.bind(this);
		this.handleFormValidation = this.handleFormValidation.bind(this);
	}

	componentDidUpdate() {
		const { isLoginSuccess } = this.props.auth;
		if (isLoginSuccess) {
			this.props.dispatch(push('/otp-2'));
		}
	}

	handleCaptcha(value) {
		this.setState({ captcha: value });
	}

	handleInputChange(event) {
		const { name, value } = event.target;
		this.setState({ [name]: value });
	}

	handleFormValidation() {
		const { email, password, captcha } = this.state;
		const errors = [];
		// eslint-disable-next-line no-useless-escape
		const emailRegex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
		if (!emailRegex.test(email)) {
			errors.push('Invalid Email Address!');
		}
		if (!password) {
			errors.push('Enter your password.');
		}
		if (captcha === '' || captcha === undefined || captcha === null) {
			errors.push('Please verify that you are human!');
		}
		return errors;
	}

	handleSubmit(event) {
		event.preventDefault();
		const { email, password, captcha } = this.state;
		const errors = this.handleFormValidation();
		if (errors.length) {
			alert(errors[0]);
			return;
		}
		this.props.dispatch(requestLoginOTP({ email, password, captcha }));
	}

	render() {
		const { email, password } = this.state;
		const { auth } = this.props;
		const { isLoginRequest } = auth;
		return (
			<>
				<div className="authincation section-padding">
					<div className="container h-100">
						<div className="row justify-content-center h-100 align-items-center">
							<div className="col-xl-5 col-md-6">
								<div className="mini-logo text-center my-5">
									<Link to={'./'}><img src={require('./../../images/logo.png')} width="120" alt="" /></Link>
								</div>
								<div className="auth-form card">
									<div className="card-header justify-content-center">
										<h4 className="card-title">Sign in</h4>
									</div>
									<div className="card-body">
										<form method="post" name="myform" className="signin_validate" action="#">
											<div className="form-group">
												<label>Email</label>
												<input type="email" className="form-control" placeholder="hello@example.com" name="email" value={email} onChange={this.handleInputChange} />
											</div>
											<div className="form-group">
												<label>Password</label>
												<input type="password" className="form-control" placeholder="Password" name="password" value={password} onChange={this.handleInputChange} />
											</div>
											<div className="form-group">
												<ReCAPTCHA sitekey={AppConstants.RECAPTCHA_SITE_KEY} onChange={this.handleCaptcha} />
											</div>
											<div className="form-row d-flex justify-content-between mt-4 mb-2">
												<div className="form-group mb-0">
													<label className="toggle">
														<input className="toggle-checkbox" type="checkbox" />
														<span className="toggle-switch"></span>
														<span className="toggle-label">Remember me</span>
													</label>
												</div>
												<div className="form-group mb-0">
													<Link to="/reset">Forgot Password?</Link>
												</div>
											</div>
											<div className="text-center">
												<button type="submit" disabled={isLoginRequest} className="btn btn-success btn-block" onClick={this.handleSubmit}>Sign in</button>
											</div>
										</form>
										<div className="new-account mt-3">
											<p>Don't have an account? <Link className="text-primary" to="/signup">Sign up</Link></p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</>
		)
	}
}

const mapStateToProps = state => ({ auth: state.auth });
*/
export default Signin;