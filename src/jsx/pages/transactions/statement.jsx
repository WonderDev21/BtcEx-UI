import React, { useEffect, useState } from "react";
import { Table, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import dayjs from 'dayjs';

import Header2 from '../../layout/header2';
import Sidebar from '../../layout/sidebar';
import Footer2 from '../../layout/footer2';
import TransactionNavbar from './transaction-navbar';
import { getTransactionStatementRequest } from '../../../actions/transactions/index';

const Statement = (props) => {
  const [offset, setOffset] = useState(0);

  const dispatch = useDispatch();

  const { auth, account } = useSelector(state => ({ auth: state.auth, account: state.account }));

  useEffect(() => {
    document.title = "BtcEX | Statement";
  }, []);

  useEffect(() => {
    dispatch(getTransactionStatementRequest(auth.userId, offset));
  }, [dispatch, auth, offset]);

  const handleLoadMore = () => {
    setOffset((offset) => offset + 10);
  }

  const parseAmount = (amount, currency) => (currency === 'USDT' ? parseFloat(amount).toFixed(2) : parseFloat(amount).toFixed(4));
  return (
    <>
      <Header2 />
      <Sidebar />
      <div className="main">
        <TransactionNavbar active="/transactions/statement" />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <Table responsive="lg" striped hover>
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Description</th>
                    <th>Ref No.</th>
                    <th>Opening Balance</th>
                    <th>Deposit</th>
                    <th>Withdrawal</th>
                    <th>Closing Balance</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    account.statement.map((st, index) => {
                      return (
                        <tr key={index}>
                          <td>{dayjs(st.updatedAt).format('MMM D, YYYY h:mm A')}</td>
                          <td>{st.remarks}</td>
                          <td><small>{st.refNo}</small></td>
                          <td>{parseAmount(st.openingBalance, st.currency)}&nbsp;<small>{st.currency}</small></td>
                          <td>{st.txnType === 'DEPOSIT' ? <span>{parseAmount(st.transactionAmount, st.currency)}&nbsp;<small>{st.currency}</small></span> : <center>-</center>}</td>
                          <td>{st.txnType === 'WITHDRAWAL' ? <span>{parseAmount(st.transactionAmount, st.currency)}&nbsp;<small>{st.currency}</small></span> : <center>-</center>}</td>
                          <td>{parseAmount(st.closingBalance, st.currency)}&nbsp;<small>{st.currency}</small></td>
                        </tr>
                      );
                    })
                  }
                </tbody>
              </Table>
            </div>
            <div className="col-lg-12 text-center mb-5">
              <Button variant="primary" onClick={handleLoadMore}>Load More</Button>
            </div>
          </div>
        </div>
      </div>

      <Footer2 />
    </>
  );
}

export default Statement;
