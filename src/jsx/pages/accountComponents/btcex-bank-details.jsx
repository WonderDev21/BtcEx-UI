import React from 'react';
import { Table } from 'react-bootstrap';

export default () => {
  return (
    <div className="row">
      <div className="col-xl-12">
        <h4 className="text-center">To Deposit HKD/USD or CNY</h4>
        <Table>
          <tbody>
            <tr>
              <td><strong>Beneficiary Name</strong></td>
              <td>ICE HOLDINGS LIMITED</td>
            </tr>
            <tr>
              <td>Bank Code</td>
              <td><b>012</b></td>
            </tr>
            <tr>
              <td>A/C No.(HKD Only)</td>
              <td><b>012-828-1-008579-9</b></td>
            </tr>
            <tr>
              <td>A/C No.(USD and CNY)</td>
              <td><b>012-828-90-09534-3</b></td>
            </tr>
            <tr>
              <td>Bank Address</td>
              <td><b>BANK OF CHINA TOWER, 1 GARDEN ROAD, CENTRAL, HONG KONG</b></td>
            </tr>
            <tr>
              <td>Beneficiary Address</td>
              <td><b>809 WAYSON COMMERCIAL BUILDING 28 CONNAUGHT ROAD</b></td>
            </tr>
            <tr>
              <td>BIC/SWIFT Code</td>
              <td><b>BKCHHKHHXXX</b></td>
            </tr>
            <tr>
              <td>Fast Payment System (FPS ID)</td>
              <td><b>9725946</b><i>&nbsp;(HKD Only)</i></td>
            </tr>
          </tbody>
        </Table>
        <center><strong className="blink" style={{ color: '#de6060' }}>Create deposit request once your deposit HKD/USD or CNY to the above bank account.</strong></center>
      </div>
    </div>
  );
};
