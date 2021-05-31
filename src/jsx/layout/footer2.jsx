import React, { } from 'react';
import { Link } from 'react-router-dom';
// import { Row, Col, Card } from 'react-bootstrap'



function Footer2() {

  return (
    <>
      <div className="footer dashboard">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-6">
              <div className="copyright">
                <p>© Copyright {new Date().getFullYear()} <Link to={'#'}>Ice Holdings Limited.</Link> | All Rights Reserved</p>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="footer-social">
                <ul>
                  <li><a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/btcexpro/"><i className="fa fa-facebook"></i></a></li>
                  <li><a target="_blank" rel="noopener noreferrer" href="https://twitter.com/BtcExPro"><i className="fa fa-twitter"></i></a></li>
                  <li><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/company/btcex/"><i className="fa fa-linkedin"></i></a></li>
                  <li><a target="_blank" rel="noopener noreferrer" href="https://t.me/BtcEXpro"><i className="fa fa-telegram"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer2;