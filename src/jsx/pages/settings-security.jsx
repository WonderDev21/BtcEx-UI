import React, { useEffect, useState } from 'react';
import { Image, Form, Button, Modal, Alert } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import * as clipboard from "clipboard-polyfill/text";
// import { Link } from 'react-router-dom';

import Header2 from '../layout/header2';
import Sidebar from '../layout/sidebar';
import PageTitle from '../element/page-title';
import Footer2 from '../layout/footer2';
import SettingsNav from '../element/settings-nav';
import { get2FACodeRequest, enable2FACodeRequest, disable2FACodeRequest, hideCodesModal } from '../../actions/settings/index';



function SettingsSecurity() {
    const [code, setCode] = useState('');
    const [isCopied, setCopied] = useState(false);
    const dispatch = useDispatch();
    const { auth, TFACode } = useSelector(state => ({ auth: state.auth, TFACode: state.TFACode }));
    const { TFAEnabled: isEnabled, userId } = auth;
    const { isError, errorMsg, securityCodes } = TFACode;

    useEffect(() => {
        console.log(isEnabled, userId);
        if (userId && !isEnabled) {
            dispatch(get2FACodeRequest(userId));
        }
    }, [dispatch, isEnabled, userId]);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!code) {
            alert('Please Enter Your 2FA or Security Code!');
            return;
        }
        if (isEnabled) {
            dispatch(disable2FACodeRequest({ userId: auth.userId, code }));
        } else {
            dispatch(enable2FACodeRequest({ userId: auth.userId, code }));
        }
    }

    const handleCopyCodes = () => {
        clipboard.writeText(securityCodes.join(", ")).then(() => {
            setCopied(true);
          }
        );
    }

    const handleModal = () => {
        return (
            <Modal show={isError || (securityCodes && securityCodes.length > 0)} onHide={() => dispatch(hideCodesModal())}>
                <Modal.Header closeButton>{isError ? 'Error' : 'Save your backup codes'}</Modal.Header>
                <Modal.Body>
                    {
                        isError
                            ? <>{errorMsg}</>
                            : <>
                                <p>Keep these backup codes somewhere safe but accessible</p>
                                    <div className="w-100 p-1 border border-primary">
                                        {
                                            (securityCodes || []).map((code, index) => <div className="d-inline-block p-1" key={index}>{code}</div>)
                                        }
                                        <div className="d-inline-block p-1 pull-right text-success"><i className="fa fa-clone" style={{ cursor: "pointer" }} onClick={handleCopyCodes} aria-hidden="true"></i></div>
                                    </div>
                                    {isCopied && <Alert show={isCopied} onClose={() => setCopied(false)} dismissible variant="success">Codes copied successfully.</Alert>}
                                <p className="text-danger mt-3">If you lose access to your default authentication method, use one of these codes to regain access to your account.</p>
                            </>
                    }
                </Modal.Body>
            </Modal>
        );
    }

    return (
        <>
            <Header2 />
            <Sidebar />
            <PageTitle />

            <div className="content-body">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-3 col-md-4">
                            <SettingsNav />
                        </div>
                        <div className="col-xl-9 col-md-8">
                            <div className="card">
                                <div className="card-header">
                                    <h4 className="card-title">Security</h4>
                                </div>
                                {handleModal()}
                                <div className="card-body">
                                    <div className="row align-items-center">
                                        <div className="col-xl-7">
                                            <div className="text-center">
                                                <h4>{`${isEnabled ? 'Disable 2FA to secure your BtcEX account' : 'Enable 2FA to secure your BtcEX account'}`}</h4>
                                                <span>Scan this QR Code with Apps like &nbsp;
                                                    <a rel="noopener noreferrer" target="_blank" href="https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2">
                                                        Google Authenticator
                                                    </a>
                                                    &nbsp;or&nbsp;
                                                    <a rel="noopener noreferrer" target="_blank" href="https://play.google.com/store/apps/details?id=com.authy.authy">
                                                        Authy
                                                    </a>
                                                </span>
                                            </div>
                                            <div className="d-block text-center pt-5">
                                                <Image src={TFACode.imageUrl} alt="" thumbnail />
                                            </div>
                                            <Form>
                                                <Form.Group controlId="formBasicCode">
                                                    <Form.Label>Enter Code</Form.Label>
                                                    <Form.Control type="text" placeholder={isEnabled ? 'Enter Code to Disable 2FA' : 'Enter Code to Enable 2FA'} value={code} onChange={(e) => setCode(e.target.value)} />
                                                </Form.Group>
                                                <Button variant="primary" className="m-auto" type="submit" onClick={handleSubmit}>Submit</Button>
                                            </Form>
                                        </div>
                                    </div>
                                    {/* <div className="row align-items-center">
                                        <div className="col-xl-4">
                                            <div className="id_card">
                                                <img src={require('./../../images/id.png')} alt="" className="img-fluid" />
                                            </div>
                                        </div>
                                        <div className="col-xl-6">
                                            <div className="id_info">
                                                <h3>Maria Pascle </h3>
                                                <p className="mb-1 mt-3">ID: 0024 5687 2254 3698 </p>
                                                <p className="mb-1">Status: <span className="font-weight-bold">Verified</span></p>
                                                <Link href="verify-step-2.html" className="btn btn-success mt-3">New ID</Link>
                                            </div>
                                        </div>
                                    </div> */}

                                    {/* <div className="row">
                                        <div className="col-xl-12">
                                            <div className="phone_verify">
                                                <h4 className="card-title mb-3">Email Address</h4>
                                                <form action="otp-2.html">
                                                    <div className="form-row align-items-center">
                                                        <div className="form-group col-xl-6">
                                                            <input type="text" className="form-control"
                                                                placeholder="hello@example.com " />
                                                            <button className="btn btn-success mt-4">Add</button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                        <div className="col-xl-12">
                                            <div className="phone_verified">
                                                <h5> <span><i className="fa fa-envelope"></i></span> hello@example.com</h5>
                                                <div className="verify">
                                                    <div className="verified">
                                                        <span><i className="la la-check"></i></span>
                                                        <Link to={'#'}>Verified</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-xl-12">
                                            <div className="phone_verify">
                                                <h4 className="card-title mb-3">Add Phone Number</h4>
                                                <form action="otp-2.html">
                                                    <div className="form-row align-items-center">
                                                        <div className="form-group col-xl-6">
                                                            <input type="text" className="form-control"
                                                                placeholder="+1 2335 2458 " />
                                                            <button className="btn btn-success mt-4">Add</button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                        <div className="col-xl-12">
                                            <div className="phone_verified">
                                                <h5> <span><i className="fa fa-phone"></i></span> +1 23584 2659</h5>
                                                <div className="verify">
                                                    <div className="verified">
                                                        <span><i className="la la-check"></i></span>
                                                        <Link to={'#'}>Verified</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer2 />
        </>
    )
}

export default SettingsSecurity;