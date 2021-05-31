import React, { } from 'react';
import { Link } from 'react-router-dom';



function Sidebar() {

    return (
        <>
            <div className="sidebar">
                <div className="menu">
                    <ul>
                        <li>
                            <a href="/exchange/" data-toggle="tooltip" data-placement="right" title="Home">
                                <span><i className="la la-igloo"></i></span>
                            </a>
                        </li>
                        <li>
                            <a href="/market" data-toggle="tooltip" data-placement="right" title="Exchange">
                                <span><i className="la la-exchange"></i></span>
                            </a>
                        </li>
                        <li>
                            <Link to="/wallets" data-toggle="tooltip" data-placement="right" title="Wallets">
                                <span><i className="la la-wallet"></i></span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/settings" data-toggle="tooltip" data-placement="right" title="Setting">
                                <span><i className="la la-tools"></i></span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Sidebar;