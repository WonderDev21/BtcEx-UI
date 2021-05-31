import React from 'react';
import { Table } from 'react-bootstrap';

export default ({ cashfreeAccount }) => {
  return (
    <div className="row">
      <div className="col-xl-12">
        <h4 className="text-center">To Deposit INR</h4>
        <Table>
          <tbody>
            <tr>
              <td><strong>Beneficiary Name</strong></td>
              <td>BtcEX</td>
            </tr>
            <tr>
              <td><strong>A/C No.</strong></td>
              <td>{cashfreeAccount.accountNumber}</td>
            </tr>
            <tr>
              <td><strong>IFSC Code</strong></td>
              <td>{cashfreeAccount.ifsc}</td>
            </tr>
          </tbody>
        </Table>
        <center><strong className="blink" style={{ color: '#de6060' }}>Funds from your <i>REGISTERED BANK ACCOUNT</i> is only accepted. Transfering INR from any other bank will result into loss of funds.</strong></center>
      </div>
    </div>
  );
};
