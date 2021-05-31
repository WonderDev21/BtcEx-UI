import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import { useDispatch, useSelector } from 'react-redux';

import { changePasswordRequest } from '../../../actions/settings/index';

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState(null);

  const dispatch = useDispatch();

  const { changePassword, auth } = useSelector(state => ({ changePassword: state.changePassword, auth: state.auth }));

  const handleChangePassword = (e) => {
    e.preventDefault();
    // eslint-disable-next-line no-useless-escape
    const passwordRegex = new RegExp(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/);
    if (newPassword === confirmPassword) {
      if (passwordRegex.test(newPassword)) {
        dispatch(changePasswordRequest(auth.userId, { oldPassword, newPassword }));
      } else {
        setErrorMsg('Passwords must contain at least 8 characters, including 1 Uppercase, 1 Lowercase and 1 digit.');
      }
    } else {
      setErrorMsg('New Passwords do not match');
    }
  };

  return (
    <>
      <div className="card-header">
        <h4 className="card-title">Change Password</h4>
      </div>
      <div className="card-body">
        <form action="#">
          <div className="form-row">
            <div className="form-group col-xl-12">
              <label className="mr-sm-2">Current Password</label>
              <input type="password" className="form-control" placeholder="Current Password" name="oldPassword" value={oldPassword} onChange={(e) => setOldPassword(e.target.value)} />
            </div>
            <div className="form-group col-xl-12">
              <label className="mr-sm-2">New Password</label>
              <input type="password" className="form-control" placeholder="New Password" name="newPassword" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
            </div>
            <div className="form-group col-xl-12">
              <label className="mr-sm-2">Confirm New Password</label>
              <input type="password" className="form-control" placeholder="Confirm New Password" name="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
            </div>
            {
              errorMsg || changePassword.error ? (
                <Alert variant="danger" onClose={() => setErrorMsg(null)} dismissible>
                  <p>{errorMsg || changePassword.error}</p>
                </Alert>
              ) : null
            }
            <div className="col-12">
              <button className="btn btn-success waves-effect" onClick={handleChangePassword}>Save</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default ChangePassword;
