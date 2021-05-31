import React from 'react';
import { Jumbotron } from 'react-bootstrap';

function btc() {
  return (
    <Jumbotron>
      <h3 className="text-center">BTC（Bitcoin)</h3>
      <hr />
      <div><h4>Project Description</h4></div>
      <span className="d-block"><label>Project Name : </label> Bitcoin</span>
      <span className="d-block"><label>Token Name : </label> BTC</span>
      <br />

      <div><h4>Project Introduction</h4></div>
      <p>Bitcoin is a cryptocurrency and a digital payment system invented by an unknown programmer, or a group of programmers, under the name Satoshi Nakamoto.It was released as open-source software in 2009.The system is peer-to-peer, and transactions take place between users directly, without an intermediary. These transactions are verified by network nodes and recorded in a public distributed ledger called a blockchain. Since the system works without a central repository or single administrator, bitcoin is called the first decentralized digital currency. Besides being created as a reward for mining, bitcoin can be exchanged for other currencies, products, and services in legal or black markets.As of February 2015, over 100,000 merchants and vendors accepted bitcoin as payment. According to research produced by Cambridge University in 2017, there are 2.9 to 5.8 million unique users using a cryptocurrency wallet, most of them using bitcoin.</p>
      <br />

      <div><h4>Token Overview</h4></div>
      <span className="d-block"><label>Circulation :</label> 21 Million</span>
      <br />

      <div><h4>Support Links</h4></div>
      <span className="d-block"><label>Official Website :</label> <a href="https://bitcoin.org/zh_CN/" target="_blank" rel="noopener noreferrer">https://bitcoin.org/zh_CN/</a></span>
      <span className="d-block"><label>WhitePaper :</label> <a href="https://bitcoin.org/bitcoin.pdf" target="_blank" rel="noopener noreferrer">https://bitcoin.org/bitcoin.pdf</a></span>
    </Jumbotron>
  );
}

export default btc;
