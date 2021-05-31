import React, { useEffect } from 'react';
import Header1 from '../layout/header1';
import Bottom from '../element/bottom';
import Footer1 from '../layout/footer1';



function RefundPolicy() {

  useEffect(() => {
		document.title = "BtcEX | Refund Policy";
	}, []);

  return (
    <>
      <Header1 />
      <div className="terms_condition">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="terms_condition-content">
                <h2 className="text-center mb-5">Refund Policy</h2>
                <div className="terms_condition-text">
                  <h3>Last updated: June 2019 </h3>
                  <p>It is important to understand how BtcEX handles digital/fiat currency transactions to ensure any refunds and recharge. BtcEX, under no circumstance, will entertain the refund or cancellation of a successfully pipelined order. Once a buyer order is fully or partially matched, the amount in USDT is transferred to the seller(s) and these transactions cannot be reversed. BtcEX shall be entitled to retain/deduct the transaction fee due from the trader. The balance after all settlements will be transferred to trader's account if/when requested except when it is unable to do so in compliance with applicable laws. Transfers shall be to any other cryptocurrency wallet specified by User and refund shall be in USDT. A fee may be charged for the transfer if the bank requires so.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Bottom />
      <Footer1 />
    </>
  )
}

export default RefundPolicy;