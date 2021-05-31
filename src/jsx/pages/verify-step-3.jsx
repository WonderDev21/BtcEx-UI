import React, { } from 'react';
import Header2 from '../layout/header2';
import Sidebar from '../layout/sidebar';
import Footer2 from '../layout/footer2';



function VerifyStep3() {

    window.setTimeout(function () {
        window.location.href = "./verify-step-4";
    }, 2000);

    return (
        <>
            <Header2 />
            <Sidebar />

            <div className="verification section-padding">
                <div className="container h-100">
                    <div className="row justify-content-center h-100 align-items-center">
                        <div className="col-xl-5 col-md-6">
                            <div className="auth-form card">
                                <div className="card-body">
                                    <form action="#" className="identity-upload">
                                        <div className="identity-content">
                                            <span className="icon"><i className="fa fa-shield"></i></span>
                                            <h4>We are verifying your ID</h4>
                                            <p>Your identity is being verified. We will email you once your verification has
                                                completed.
                                        </p>
                                        </div>

                                        <div className="upload-loading text-center mb-3">
                                            <i className="fa fa-spinner fa-spin fa-3x fa-fw"></i>
                                        </div>
                                    </form>
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

export default VerifyStep3;