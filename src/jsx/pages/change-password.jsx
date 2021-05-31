import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Alert, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { push } from 'connected-react-router';

import { updateForgetPasswordRequest, resetForgetPassword } from '../../actions/auth/index';


function ChangePassword() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const updatePassword = useSelector(state => state.updatePassword);
  const { isSubmitting, isSuccess, isError, message } = updatePassword;

  const dispatch = useDispatch();
  const location = useLocation();

  const token = new URLSearchParams(location.search).get('token') || '';

  useEffect(() => {
    if (!token) {
      dispatch(push('/login'));
    }
  }, [token, dispatch]);

  const handleFormValidation = () => {
    const errors = [];
    const passwordRegex = new RegExp(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/);
    if (!passwordRegex.test(password)) {
      errors.push('Passwords must contain at least 8 characters, including 1 Uppercase, 1 Lowercase and 1 digit.');
    }
    if (password !== confirmPassword) {
      errors.push('Passwords do not match!');
    }
    return errors;
  }

  const handlePasswordUpdate = () => {
    const errors = handleFormValidation();
    if (errors.length) {
      alert(errors[0]);
      return;
    }
    dispatch(updateForgetPasswordRequest({ token, password }))
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
                  <h4 className="card-title d-block">Change Password</h4>
                </div>
                <div className="card-body">
                  <div className="form-group">
                    <label>New Password</label>
                    <input type="password" className="form-control" placeholder="Enter your password" value={password} onChange={(event) => setPassword(event.target.value)} />
                  </div>
                  <div className="form-group">
                    <label>Confirm Password</label>
                    <input type="password" className="form-control" placeholder="Enter your password again" value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} />
                  </div>
                  <div className="text-center">
                    {isSuccess ? <Alert variant="success" onClose={() => dispatch(resetForgetPassword())} dismissible>Your password is updated successfully.</Alert> : null}
                    {isError ? <Alert variant="danger" onClose={() => dispatch(resetForgetPassword())} dismissible>{message || 'Something went wrong'}</Alert> : null}
                    <Button type="submit" disabled={isSubmitting} className="btn btn-success btn-block" onClick={handlePasswordUpdate}>Update</Button>
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

export default ChangePassword;