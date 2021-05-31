import React from 'react';
import { Jumbotron } from 'react-bootstrap';

function usdt() {
  return (
    <Jumbotron>
      <h3 className="text-center">USDT (TetherUS)</h3>
      <hr />
      <div><h4>Project Description</h4></div>
      <span className="d-block"><label>Project Name : </label> TetherUS</span>
      <span className="d-block"><label>Token Name : </label> USDT</span>
      <span className="d-block"><label>Contract Address : </label> 0xdac17f958d2ee523a2206206994597c13d831ec7</span>
      <br />

      <div><h4>Project Introduction</h4></div>
      <p>USDT is a crypto-currency asset issued on the Bitcoin blockchain via the Omni Layer Protocol. Each USDT unit is backed by a U.S Dollar held in the reserves of the Tether Limited and can be redeemed through the Tether Platform. USDT can be transferred, stored, spent, just like Bitcoins or any other crypto-currency.USDT and other Tether currencies were created to facilitate the transfer of national currencies, to provide users with a stable alternative to Bitcoin and to provide an alternative for exchange and wallet audits which are currently unreliable. USDT provides an alternative to Proof of Solvency methods by introducing a Proof of Reserves Process. In the Tether Proof of Reserves system, the amount of USDT in circulations can be easily checked on the Bitcoin blockchain via the tools provided at Omnichest.info, while the corresponding total amount of USD held reserves is proved by publishing the bank balance and undergoing periodic audits by professionals.</p>
      <br />

      <div><h4>Token Overview</h4></div>
      <span className="d-block"><label>Total Supply :</label> 2.83 Billion</span>
      <span className="d-block"><label>Circulation :</label> 2.507 Billion</span>
      <br />

      <div><h4>Support Links</h4></div>
      <span className="d-block"><label>Official Website :</label> <a href="https://tether.to/" target="_blank" rel="noopener noreferrer">https://tether.to/</a></span>
      <span className="d-block"><label>WhitePaper :</label> <a href="https://tether.to/wp-content/uploads/2016/06/TetherWhitePaper.pdf" target="_blank" rel="noopener noreferrer">https://tether.to/wp-content/uploads/2016/06/TetherWhitePaper.pdf</a></span>
      <span className="d-block"><label>Facebook :</label> <a href="https://www.facebook.com/tether.to" target="_blank" rel="noopener noreferrer">https://www.facebook.com/tether.to</a></span>
      <span className="d-block"><label>Twitter :</label> <a href="https://twitter.com/Tether_to/" target="_blank" rel="noopener noreferrer">https://twitter.com/Tether_to/</a></span>
    </Jumbotron>
  );
}

export default usdt;
