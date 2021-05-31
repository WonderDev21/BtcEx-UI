import React, { } from 'react';
import { Link } from 'react-router-dom';
import Header2 from '../layout/header2';
import Sidebar from '../layout/sidebar';
import Footer2 from '../layout/footer2';



function VerifyStep6() {

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
                                            <span className="icon"><i className="fa fa-check"></i></span>
                                            <h4>Congratulation. Your bank added</h4>
                                            <p>Efficiently provide access to installed base core competencies and end end
                                            data Interactively target equity.</p>
                                        </div>

                                        <div className="text-center">
                                            <Link to={'./settings-account'} type="submit" className="btn btn-success pl-5 pr-5">Continue</Link>
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

export default VerifyStep6;