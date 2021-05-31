import React from 'react';
import { Jumbotron } from 'react-bootstrap';

function ltc() {
  return (
    <Jumbotron>
      <h3 className="text-center">LTC（Litecoin)</h3>
      <hr />
      <div><h4>Project Description</h4></div>
      <span className="d-block"><label>Project Name : </label> Litecoin</span>
      <span className="d-block"><label>Token Name : </label> LTC</span>
      <br />

      <div><h4>Project Introduction</h4></div>
      <p>Litecoin (LTC ) is a peer-to-peer cryptocurrency and open source software project released under the MIT/X11 license. Creation and transfer of coins is based on an open source cryptographic protocol and is not managed by any central authority. While inspired by, and in most regards technically nearly identical to Bitcoin (BTC), Litecoin has some technical improvements over Bitcoin, and most other major cryptocurrencies, such as the adoption of Segregated Witness, and the Lightning Network. These effectively allow a greater amount of transactions to be processed by the network in a given time, reducing potential bottlenecks, as seen with Bitcoin. Litecoin also has almost zero payment cost and facilitates payments approximately four times faster than Bitcoin.</p>
      <br />

      <div><h4>Token Overview</h4></div>
      <span className="d-block"><label>Circulation :</label> 2 Billion</span>
      <br />

      <div><h4>Support Links</h4></div>
      <span className="d-block"><label>Official Website :</label> <a href="https://litecoin.org/" target="_blank" rel="noopener noreferrer">https://litecoin.org/</a></span>
    </Jumbotron>
  );
}

export default ltc;
