import React, { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';

import Header1 from '../layout/header1';
import Bottom from '../element/bottom';
import Footer1 from '../layout/footer1';
import { fetchTradeFees } from '../../actions/app/index';

const baseCurrency = { code: 'USDT' };

const Fees = () => {
  const dispatch = useDispatch();

  const app = useSelector(state => state.app);
  const { fees, feeStructure } = app;

  useEffect(() => {
    document.title = "BtcEX | Fees";
  }, []);

  useEffect(() => {
    dispatch(fetchTradeFees());
  }, [dispatch]);

  return (
    <>
      <Header1 />
      <div className="terms_condition">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <Table responsive striped bordered hover>
                <thead>
                  <tr>
                    <th colSpan="5">Trading Fees (All Pairs)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colSpan="3">Seller Fees</td>
                    <td colSpan="2">{fees.sellerFee}%</td>
                  </tr>
                  <tr>
                    <td colSpan="3">Buyer Fees</td>
                    <td colSpan="2">{fees.buyerFee}%</td>
                  </tr>
                </tbody>
              </Table>
            </div>
            <div className="col-lg-9">
              <Table responsive striped bordered hover>
                <thead>
                  <tr>
                    <th>Coin/Token</th>
                    <th>Withdrawal Fees</th>
                    <th>Minimum Withdrawal</th>
                    <th>Deposit Fees</th>
                    <th>Minimum Deposit</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    _.map(feeStructure, (item, currency) => {
                      return (
                        <tr key={currency}>
                          <td>{currency}</td>
                          <td>{item.withdrawal_fees} {currency}</td>
                          <td>{item.minimum_withdrawal} {currency}</td>
                          <td>{item.deposit_fees || 'Free'}</td>
                          <td>{item.minimum_deposit} {currency}</td>
                        </tr>
                      );
                    })
                  }
                </tbody>
              </Table>
            </div>
            <div className="col-lg-9">
              <Table responsive striped bordered hover hidden>
                <thead>
                  <tr>
                    <th colSpan="5">Settlement Timings</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colSpan="2">ETH Deposit</td>
                    <td colSpan="3">(1-5) mins * After 30 Blocks confirmation</td>
                  </tr>
                  <tr>
                    <td colSpan="2">ETH Withdrawal</td>
                    <td colSpan="3">2 Hours</td>
                  </tr>
                  <tr>
                    <td colSpan="2">IOTA Deposit</td>
                    <td colSpan="3">30 min * After 1 confirmation</td>
                  </tr>
                  <tr>
                    <td colSpan="2">IOTA Withdrawal</td>
                    <td colSpan="3">1-2 Hours * Sometimes longer</td>
                  </tr>
                  <tr>
                    <td colSpan="2">{baseCurrency.code} Deposit</td>
                    <td colSpan="3">2 Hours</td>
                  </tr>
                  <tr>
                    <td colSpan="2">{baseCurrency.code} Withdrawal</td>
                    <td colSpan="3">By Next Working day</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </div>
      <Bottom />
      <Footer1 />
    </>
  )
}

export default Fees;