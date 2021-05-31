import React from 'react';
import { Jumbotron } from 'react-bootstrap';

function xrp() {
  return (
    <Jumbotron>
      <h3 className="text-center">XRP (Ripple)</h3>
      <hr />
      <div><h4>Project Description</h4></div>
      <span className="d-block"><label>Project Name : </label> Ripple</span>
      <span className="d-block"><label>Token Name : </label> XRP</span>
      <span className="d-block"><label>Type : </label> Token</span>
      <br />

      <div><h4>Project Introduction</h4></div>
      <p>Ripple (XRP) is an independent digital asset that is native to the Ripple Consensus Ledger. With proven governance and the fastest transaction confirmation of its kind, XRP is said to be the most efficient settlement option for financial institutions and liquidity providers seeking global reach, accessibility and fast settlement finality for interbank flows.</p>
      <br />

      <div><h4>Token Overview</h4></div>
      <span className="d-block"><label>Total Supply :</label> 99,991,850,794</span>
      <span className="d-block"><label>Circulation :</label> 41,432,141,931</span>
      <span className="d-block"><label>Issue Date :</label> 2011/4/18</span>
      <span className="d-block"><label>Consensus Protocol :</label> RPCA</span>
      <span className="d-block"><label>Private Offering Price :</label> 1XRP=$0.031</span>
      <br />

      <div><h4>Support Links</h4></div>
      <span className="d-block"><label>Official Website :</label> <a href="https://ripple.com/" target="_blank" rel="noopener noreferrer">https://ripple.com/</a></span>
      <span className="d-block"><label>WhitePaper :</label> <a href="https://ripple.com/files/ripple_consensus_whitepaper.pdf" target="_blank" rel="noopener noreferrer">https://ripple.com/files/ripple_consensus_whitepaper.pdf</a></span>
      <span className="d-block"><label>Facebook :</label> <a href="https://www.facebook.com/ripplepay" target="_blank" rel="noopener noreferrer">https://www.facebook.com/ripplepay</a></span>
      <span className="d-block"><label>Twitter :</label> <a href="https://twitter.com/Ripple" target="_blank" rel="noopener noreferrer">https://twitter.com/Ripple</a></span>
    </Jumbotron>
  );
}

export default xrp;
