import React, { useEffect, useState } from "react";
import { Table, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import dayjs from 'dayjs';

import Header2 from '../../layout/header2';
import Sidebar from '../../layout/sidebar';
import Footer2 from '../../layout/footer2';
import TransactionNavbar from './transaction-navbar';
import { getTransactionWithdrawalRequest } from '../../../actions/transactions/index';
import AppConstants from '../../../constants/AppConstants';

const Withdrawal = (props) => {
  const [offset, setOffset] = useState(0);

  const dispatch = useDispatch();

  const { auth, transactions } = useSelector(state => ({ auth: state.auth, transactions: state.transactions }));

  useEffect(() => {
    document.title = "BtcEX | Withdrawals";
  }, []);

  useEffect(() => {
    dispatch(getTransactionWithdrawalRequest(auth.userId, offset));
  }, [dispatch, auth, offset]);

  const handleLoadMore = () => {
    setOffset((offset) => offset + 10);
  }

  return (
    <>
      <Header2 />
      <Sidebar />
      <div className="main">
        <TransactionNavbar active="/transactions/withdrawal" />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <Table responsive="lg" striped hover>
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Status</th>
                    <th>Amount</th>
                    <th>Currency</th>
                    <th>Txn. Ref. No.</th>
                    <th>Txn. Info.</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    transactions.withdrawals.map((w, index) => {
                      let info = w.transactionInfo;
                      let value = null;
                      if (info) {
                        let txHash = info.link || info.url || info.transactionHash || info.txHash;
                        if (txHash) {
                          const explorerPrefix = AppConstants.EXPLORE_MAP[w.currency];
                          value = <a target="_blank" rel="noopener noreferrer" href={info.link || info.url || `${explorerPrefix}${txHash}`}>Link</a>;
                        } else if (info.bankRef) {
                          value = `Bank Txn RefNo - ${info.bankRef}`;
                        }
                      }
                      return (
                        <tr key={index}>
                          <td>{dayjs(w.createdAt).format('MMM D, YYYY h:mm A')}</td>
                          <td>{w.status}</td>
                          <td>{w.amount}</td>
                          <td>{w.currency}</td>
                          <td>{w.refNo || "-"}</td>
                          <td>{value || "-"}</td>
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

export default Withdrawal;
