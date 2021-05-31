import React, { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';

import Header1 from '../layout/header1';
import Bottom from '../element/bottom';
import Footer1 from '../layout/footer1';
import { getCryptoSummaryRequest } from '../../actions/cryptoSummary/index';
import coinsSvg from '../../constants/CoinsSvg';

function Assets() {
  const dispatch = useDispatch();

  const cryptoSummary = useSelector(state => state.cryptoSummary);

  useEffect(() => {
    document.title = "BtcEX | Assets";
  }, []);

  useEffect(() => {
    dispatch(getCryptoSummaryRequest());
  }, [dispatch]);

  return (
    <>
      <Header1 />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <Table>
              <thead>
                <tr>
                  <td>Logo</td>
                  <td>Coin</td>
                  <td>Last Price</td>
                  <td>24h Change</td>
                  <td>24h High</td>
                  <td>24h Low</td>
                  <td>24h Volumn</td>
                </tr>
              </thead>
              <tbody>
                {
                  Object.keys(cryptoSummary).map((key) => {
                    const change = cryptoSummary[key].percentChange;
                    const coinUrl = coinsSvg[cryptoSummary[key].target_currency] || '';
                    return <tr key={key}>
                      <td><img src={coinUrl ? require(`./../../images/coins/${coinUrl}`) : ''} width="40" alt="" /></td>
                      <td><strong>{cryptoSummary[key].target_currency}</strong> / {cryptoSummary[key].base_currency}</td>
                      <td>{cryptoSummary[key].last}</td>
                      <td>{change}% <span className={ change > 0 ? "buy-thumb" : "sold-thumb"}><i className={change > 0 ? "la la-arrow-up" : "la la-arrow-down"}></i></span></td>
                      <td>{cryptoSummary[key].high24hr}</td>
                      <td>{cryptoSummary[key].low24hr}</td>
                      <td>{cryptoSummary[key].quote_volume}</td>
                    </tr>
                  })
                }
              </tbody>
            </Table>
          </div>
        </div>
      </div>
      <Bottom />
      <Footer1 />
    </>
  );
}

export default Assets;
