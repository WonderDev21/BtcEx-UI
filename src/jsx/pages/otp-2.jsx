import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Alert } from 'react-bootstrap';

import { requestLogin, requestResendOTP } from '../../actions/auth/index';

function LoginVerification(props) {
  const [otp, setOTP] = useState('');
  const dispatch = useDispatch();

  const auth = useSelector(state => state.auth);
  const { loginData, errorMsg } = auth;

  const handleSubmitOTP = (event) => {
    if (event) {
      event.preventDefault();
    }
    dispatch(requestLogin({ otp, authenticator: loginData.authenticator }));
  }

  const handleResendOTP = () => {
    dispatch(requestResendOTP());
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
                <div className="card-body">
                  <Link className="page-back text-muted" to={'./signin'}>
                    <span><i className="fa fa-angle-left"></i></span> Back
                    </Link>
                  {
                    loginData.authenticator
                      ? <>
                        <h3 className="text-center">Authentication Code</h3>
                        <p className="text-center mb-5">Enter your authenticator code</p>
                        <form action="#">
                          <div className="form-group">
                            <label>Your Code</label>
                            <input type="text" className="form-control text-center font-weight-bold" value={otp} onChange={(e) => setOTP(e.target.value)} />
                          </div>
                          <div className="text-center">
                            <button type="submit" className="btn btn-success btn-block" onClick={handleSubmitOTP} >Verify</button>
                          </div>
                        </form>
                      </>
                      : <>
                        <h3 className="text-center">OTP Verification</h3>
                        <p className="text-center mb-5">We have sent you one time code on your register email</p>
                        <form action="#">
                          <div className="form-group">
                            <label>Your OTP Code</label>
                            <input type="text" className="form-control text-center font-weight-bold" value={otp} onChange={(e) => setOTP(e.target.value)} />
                          </div>
                          <div className="text-center">
                            { errorMsg ? <Alert variant="danger">{errorMsg || 'Something went wrong'}</Alert> : null}
                            <button type="submit" className="btn btn-success btn-block" onClick={handleSubmitOTP} >Verify</button>
                          </div>
                        </form>
                        <div className="new-account mt-3 d-flex justify-content-between">
                          <p>Don't get code? <span className="text-primary" style={{ cursor: "pointer" }} onClick={handleResendOTP}>Resend</span></p>
                        </div>
                      </>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginVerification;
