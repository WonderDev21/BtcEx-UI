import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import ReCAPTCHA from 'react-google-recaptcha';
import { useDispatch, useSelector } from 'react-redux';
import { push } from 'connected-react-router';
import { Alert } from 'react-bootstrap';

import { requestSignup } from '../../actions/auth/index';
import AppConstants from '../../constants/AppConstants';

const { APP_NAME } = AppConstants;

function Signup(props) {
  const { location } = props;

  const [referredby, setReferredby] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [captcha, setCaptcha] = useState(null);

  const dispatch = useDispatch();

  const auth = useSelector(state => state.auth);
  const { isSignupRequest, isSignupFailed, errorMsg } = auth;

  useEffect(() => {
		document.title = "BtcEX | Signup";
	}, []);

  useEffect(() => {
    const isLoggedIn = !_.isEmpty(auth) && auth.isLoggedIn;
    if (isLoggedIn) {
      dispatch(push('/market'));
    } else {
      const prevReferredBy = localStorage.getItem(`${APP_NAME}-referredby`);
      const referredby = _.get(location, 'query.referredby', prevReferredBy);
      if (referredby) {
        localStorage.setItem(`${APP_NAME}-referredby`, referredby);
        setReferredby(referredby);
      }
    }
  }, [auth, dispatch, location]);

  const handleFormValidation = () => {
    const errors = [];
    if (!fullName) {
      errors.push('Please Enter your Full Name');
    }
    // eslint-disable-next-line no-useless-escape
    const emailRegex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
    if (!emailRegex.test(email)) {
      errors.push('Invalid Email Address!');
    }
    const passwordRegex = new RegExp(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/);
    if (!passwordRegex.test(password)) {
      errors.push('Passwords must contain at least 8 characters, including 1 Uppercase, 1 Lowercase and 1 digit.');
    }
    if (captcha === '' || captcha === undefined || captcha === null) {
      errors.push('Please verify that you are human!');
    }
    return errors;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = handleFormValidation();
    if (errors.length) {
      alert(errors[0]);
      return;
    }
    dispatch(requestSignup({ fullName, email, password, captcha, referredby }));
  }

  return (
    <>
      <div className="authincation">
        <div className="container h-100">
          <div className="row justify-content-center h-100 align-items-center">
            <div className="col-xl-5 col-md-6">
              <div className="mini-logo text-center my-5">
                <Link to={'/'}><img src={require('./../../images/logo.png')} width="120" alt="" /></Link>
              </div>
              <div className="auth-form card">
                <div className="card-header justify-content-center">
                  <h4 className="card-title">Sign up</h4>
                </div>
                <div className="card-body">
                  <form method="post" name="myform" className="signup_validate">
                    <div className="form-group">
                      <label>Full Name</label>
                      <input type="text" className="form-control" placeholder="Full Name" name="fullName" value={fullName} onChange={(e) => setFullName(e.target.value)} />
                    </div>
                    <div className="form-group">
                      <label>Email</label>
                      <input type="email" className="form-control" placeholder="hello@example.com" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="form-group">
                      <label>Password</label>
                      <input type="password" className="form-control" placeholder="Password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="form-group">
                      <ReCAPTCHA sitekey={AppConstants.REACT_APP_RECAPTCHA_SITE_KEY} onChange={value => setCaptcha(value)} />
                    </div>
                    <div className="text-center mt-4">
                      { isSignupFailed ? <Alert variant="danger">{errorMsg || 'Something went wrong'}</Alert> : null}
                      <button type="submit" disabled={isSignupRequest} className="btn btn-success btn-block" onClick={handleSubmit} >Sign up</button>
                    </div>
                  </form>
                  <div className="new-account mt-3">
                    <p>Already have an account? <Link className="text-primary" to={'signin'}>Sign in</Link>
                    </p>
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

export default Signup;
