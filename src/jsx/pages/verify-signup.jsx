import React, {  } from 'react';
// import { Link } from 'react-router-dom';
import { } from 'react-redux';

import Header1 from '../layout/header1';
import Footer1 from '../layout/footer1';

function VerifySignup(props) {
  const { location } = props;
  const email = location.search.split("=")[1];

  return (
    <>
      <Header1 />

      <div className="verification section-padding">
        <div className="container h-100">
          <div className="row justify-content-center h-100 align-items-center">
            <div className="col-xl-5 col-md-6 col-md-6">
              <div className="auth-form card">
                <div className="card-body">
                  <form action="#" className="identity-upload">
                    <div className="identity-content">
                      <span className="icon"><i className="fa fa-check"></i></span>
                      <h4>Thank you for signing up</h4>
                      <p>We&apos;ve sent an email to <strong>{email}</strong></p>
                      <p>Please click the link in that email to activate you account.</p>
                    </div>

                    {/* <div className="text-center">
                      <Link to={'./settings-account'} type="submit" className="btn btn-success pl-5 pr-5">Continue</Link>
                    </div> */}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer1 />
    </>
  );
}

export default VerifySignup;
