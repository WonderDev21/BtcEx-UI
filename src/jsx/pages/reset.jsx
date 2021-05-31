import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Alert, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import { forgetPasswordRequest, resetForgetPassword } from '../../actions/auth/index';


function Reset() {
	const [email, setEmail] = useState('');

	const updatePassword = useSelector(state => state.updatePassword);
  const { isSubmitting, isSuccess, isError, message } = updatePassword;

	const dispatch = useDispatch();

	const handleResetSubmit = () => {
		const link = window.location.origin;
		if (!email) {
			alert('Please enter your email!');
			return;
		}
		dispatch(forgetPasswordRequest({ email, link }))
	}

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
									<h4 className="card-title d-block">Reset password</h4>
								</div>
								<div className="card-body">
									<p>Enter your email address and we will send you a link to reset your password.</p>
									<div className="form-group">
										<label>Email</label>
										<input type="email" className="form-control" placeholder="hello@example.com" value={email} onChange={(event) => setEmail(event.target.value)} />
									</div>
									<div className="text-center">
										{ isSuccess ? <Alert variant="success" onClose={() => dispatch(resetForgetPassword())} dismissible>An Email has been sent to this address. Please check your inbox.</Alert> : null}
										{ isError ? <Alert variant="danger" onClose={() => dispatch(resetForgetPassword())} dismissible>{message || 'Something went wrong'}</Alert> : null}
										<Button type="submit" disabled={isSubmitting} className="btn btn-success btn-block" onClick={handleResetSubmit}>Reset</Button>
									</div>
									<div className="new-account mt-3">
										<p className="mb-1">Don't Received? </p>
										<span className="text-primary" style={{ cursor: "pointer" }} onClick={handleResetSubmit}>Resend</span>
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

export default Reset;