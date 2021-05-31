import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Modal, Button, Alert, Table } from 'react-bootstrap';
import { find } from 'lodash';

import { walletAddressRequest } from '../../../actions/accounts/index';
import INRComponent from './inr-component';
import DepositRequest from './deposit-request';
import BtcexBankDetail from './btcex-bank-details';
import { formatCurrencyAddress } from '../../../common/currencyUtils';
import Loading from '../../element/loader';
import AppConstants from '../../../constants/AppConstants';

const infoMsg = {
  BTC: `Send only BTC to this deposit address\n Sending any other currency to this address may result in the permanent loss of your deposit.`,
  BXC: `DO NOT SEND ANY OTHER TOKENS TO THIS ADDRESS! Send only BXC Token to this deposit address\n Sending any other tokens to this address will result in the permanent loss of your deposit.`,
  USDT: `DO NOT SEND ANY OTHER TOKENS TO THIS ADDRESS! Send only USDT Token to this deposit address\n Sending any other tokens to this address will result in the permanent loss of your deposit.`,
  ETH: `<span style="color: #f00;">DO NOT SEND TOKENS TO THIS ADDRESS!</span> Send only Ether (ETH) to this deposit address\n Sending tokens or any other currency to this address will result in the permanent loss of your deposit.`,
  LTC: `Send only LTC to this deposit address\n Sending any other currency to this address may result in the permanent loss of your deposit.`,
  XRP: `Send only XRP to this deposit address\n Sending any other currency to this address may result in the permanent loss of your deposit.`,
  MIOTA: `<span style="color: #f00;">IOTA wallet adddress will change after 1 successful transaction.</span>\n Send only IOTA to this deposit address\n Sending any other currency to this address may result in the permanent loss of your deposit.`,
};

function Deposit({ isOpen, onClose, type, currency, feeStructure }) {
  const [isRequestModal, setRequestModal] = useState(false);

  const { walletAddress, auth: { userId, cashfreeAccount = {} } } = useSelector(state => ({ walletAddress: state.walletAddress, auth: state.auth }));
  const dispatch = useDispatch();

  const { isLoading, errorMsg } = walletAddress;

  const walletData = walletAddress[currency];

  useEffect(() => {
    if (!walletData && !AppConstants.FIAT_CURRENCIES[currency]) {
      dispatch(walletAddressRequest({ userId, currency }));
    }
  }, [dispatch, currency, userId, walletData]);

  const fs = find(feeStructure, (val, key) => key === currency);
  const info = infoMsg[currency] || `Send only ${currency} to this deposit address\nSending any other currency to this address may result in the permanent loss of your deposit.`;
  const min = fs ? fs.minimum_deposit : 0;

  const getDepositCompoent = () => {
    if (isLoading || !walletData) {
      return <Loading />;
    } else if (errorMsg) {
      return (<Alert variant="danger">
        {errorMsg}
      </Alert>)
    } else {
      return (
        <div className="row">
          <div className="col-xl-12">
            <Alert variant="primary">
              {info}<br />
              {min && <>Minimum Deposit: <strong>{min} {currency}</strong>. Amount below minimum deposit won&apos;t be credited.</>}
            </Alert>
            {currency === "XRP" && <Alert variant="danger">
              <Alert.Heading>Follow correct Ripple (XRP) deposit procedure</Alert.Heading>
              Destination tag and wallet address both are mandatory to deposit Ripple (XRP). Failing to do so will result in loss of your deposit.
            </Alert>}
            <Table responsive variant="flush">
              <tbody>
                {walletData.tag && <tr>
                  <td>Destination Tag:</td>
                  <td>{walletData.tag}</td>
                </tr>}
                <tr>
                  <td>{currency} Wallet Address:</td>
                  <td>{formatCurrencyAddress(walletData.address, currency)}</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      );
    }
  }

  return (
    <Modal show={isOpen} size="xl" centered onHide={onClose} animation={true}>
      <Modal.Header closeButton>
        <Modal.Title>Deposit {currency}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {
          currency === "INR" ? <INRComponent cashfreeAccount={cashfreeAccount} /> : currency === "USD" ? <BtcexBankDetail /> : getDepositCompoent()
        }
        { isRequestModal ? <DepositRequest isOpen={isRequestModal} onClose={() => setRequestModal(false)} /> : null }
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={onClose}><i className="fa fa-times" /> Close </Button>
        { currency === "USD" && <Button variant="primary" onClick={() => setRequestModal(true)}><i className="fa fa-check" /> Deposit Request</Button> }
      </Modal.Footer>
    </Modal >
  );
}

export default Deposit;
