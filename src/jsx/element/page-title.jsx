import React, { } from 'react';
import { useSelector } from 'react-redux';


function PageTitle() {
    const auth = useSelector(state => state.auth);
    return (
        <>
            <div className="page-title dashboard">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="page-title-content">
                                <p>Welcome Back, <span>{auth.fullName}</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PageTitle;