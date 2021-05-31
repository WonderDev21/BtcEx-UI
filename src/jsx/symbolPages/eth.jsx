import React from 'react';
import { Jumbotron } from 'react-bootstrap';

function eth() {
  return (
    <Jumbotron>
      <h3 className="text-center">ETH（Ethereum)</h3>
      <hr />
      <div><h4>Project Description</h4></div>
      <span className="d-block"><label>Project Name : </label> Ethereum</span>
      <span className="d-block"><label>Token Name : </label> ETH</span>
      <br />

      <div><h4>Project Introduction</h4></div>
      <p>Ethereum (ETH) is an open-source, public, blockchain-based distributed computing platform featuring smart contract (scripting) functionality, which facilitates online contractual agreements. Ethereum also provides a cryptocurrency token called "ether", which can be transferred between accounts and used to compensate participant nodes for computations performed. "Gas", an internal transaction pricing mechanism, is used to mitigate spamand allocate resources on the network.The value token of the Ethereum blockchain is called ether. It is listed under the diminutive ETH and traded on cryptocurrency exchanges. It is also used to pay for transaction fees and computational services on the Ethereum network.</p>
      <br />

      <div><h4>Token Overview</h4></div>
      <span className="d-block"><label>Total Supply :</label> 107,100,935</span>
      <span className="d-block"><label>Circulation :</label> 107,100,935</span>
      <br />

      <div><h4>Support Links</h4></div>
      <span className="d-block"><label>Official Website :</label> <a href="https://www.ethereum.org/" target="_blank" rel="noopener noreferrer">https://www.ethereum.org/</a></span>
      <span className="d-block"><label>WhitePaper :</label> <a href="https://github.com/ethereum/wiki/wiki/White-Paper" target="_blank" rel="noopener noreferrer">https://github.com/ethereum/wiki/wiki/White-Paper</a></span>
    </Jumbotron>
  );
}

export default eth;
