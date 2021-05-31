import React, { useEffect, useState } from "react";
import { Table, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import dayjs from 'dayjs';

import Header2 from '../../layout/header2';
import Sidebar from '../../layout/sidebar';
import Footer2 from '../../layout/footer2';
import TransactionNavbar from './transaction-navbar';
import { getTransactionRequestRequest } from '../../../actions/transactions/index';

const Request = (props) => {
  const [offset, setOffset] = useState(0);

  const dispatch = useDispatch();

  const { auth, requests } = useSelector(state => ({ auth: state.auth, requests: state.requests }));

  useEffect(() => {
    document.title = "BtcEX | Requests";
  }, []);

  useEffect(() => {
    dispatch(getTransactionRequestRequest(auth.userId, offset));
  }, [dispatch, auth, offset]);

  const handleLoadMore = () => {
    setOffset((offset) => offset + 10);
  }

  return (
    <>
      <Header2 />
      <Sidebar />
      <div className="main">
        <TransactionNavbar active="/transactions/request" />
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
                    <th>Reference No.</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    requests.map((rq, index) => {
                      return (
                        <tr key={index}>
                          <td>{dayjs(rq.createdAt).format('MMM D, YYYY h:mm A')}</td>
                          <td>{rq.status}</td>
                          <td>{rq.amount}</td>
                          <td>{rq.currency}</td>
                          <td>{rq.refNo}</td>
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

export default Request;
