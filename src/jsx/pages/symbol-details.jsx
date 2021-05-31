import React, { useState, useEffect } from 'react';
import { Tab, Tabs } from 'react-bootstrap';

import Header1 from '../layout/header1';
import Bottom from '../element/bottom';
import Footer1 from '../layout/footer1';
import BXC from '../symbolPages/bxc';
import BTC from '../symbolPages/btc';
import ETH from '../symbolPages/eth';
import LTC from '../symbolPages/ltc';
import USDT from '../symbolPages/usdt';
import XRP from '../symbolPages/xrp';

function SymbolDetails() {
  const [key, setKey] = useState('bxc');

  useEffect(() => {
		document.title = "BtcEX | Symbol Details";
	}, []);

  return (
    <>
      <Header1 />
      <div className="container pt-5 pb-5">
        <Tabs id="symbol-detail-controlled-tab" activeKey={key} onSelect={(k) => setKey(k)}>
          <Tab eventKey="bxc" title="BXC">
            <BXC />
          </Tab>
          <Tab eventKey="btc" title="BTC">
            <BTC />
          </Tab>
          <Tab eventKey="eth" title="ETH">
            <ETH />
          </Tab>
          <Tab eventKey="ltc" title="LTC">
            <LTC />
          </Tab>
          <Tab eventKey="usdt" title="USDT">
            <USDT />
          </Tab>
          <Tab eventKey="xrp" title="XRP">
            <XRP />
          </Tab>
        </Tabs>
      </div>
      <Bottom />
      <Footer1 />
    </>
  )
}

export default SymbolDetails;