import React, { useState } from 'react';
import { Modal, Button, Form, Alert } from 'react-bootstrap';
import { find } from 'lodash';
import WAValidator from 'wallet-address-validator';
import { useSelector, useDispatch } from 'react-redux';

import { getCurrencyPlaceHolder } from '../../../common/currencyUtils';
import AppConstants from '../../../constants/AppConstants';
import { withdrawAmountRequest, withdrawOTPRequest, clearWithdrawState } from '../../../actions/accounts/index';

function Withdrawal({ isOpen, onClose, type, currency, currencyValue, feeStructure }) {

  const [withdrawAmount, setWithdrawAmount] = useState('');
  const [walletAddress, setWalletAddress] = useState('');
  const [tag, setTag] = useState('');
  const [noXRPTag, setNoXRPTag] = useState(false);
  const [isOTP, setIsOTP] = useState(false);
  const [otp, setOtp] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const { auth, withdraw } = useSelector(state => ({ auth: state.auth, withdraw: state.withdraw }));
  const { isSubmitting, apiErrorMsg, token, message, isSuccess } = withdraw;
  const dispatch = useDispatch();

  const wAValidatorIgnore = {
    USDT: "USDT",
    BXC: "BXC"
  }

  const handleVerifyRequest = () => {
    const fs = find(feeStructure, (val, key) => key === currency);
    let errMsg = null;
    if (!withdrawAmount || Number.isNaN(withdrawAmount)) {
      errMsg = 'Amount is required';
    } else if (withdrawAmount <= 0) {
      errMsg = 'Amount should be more than 0';
    } else if (Number(withdrawAmount) > Number(currencyValue)) {
      errMsg = 'Amount cannot be more than available account balance';
    } else if (currency !== AppConstants.FIAT_CURRENCIES[currency] && !walletAddress) {
      errMsg = 'Wallet address is required';
    } else if (currency === "XRP" && !noXRPTag && !tag) {
      errMsg = 'Destination Tag is required for Ripple Withdrawal';
    } else if (currency !== wAValidatorIgnore[currency] && walletAddress && !WAValidator.validate(walletAddress, currency)) {
      errMsg = 'Invalid wallet address. Wallet address not supported for withdrawal';
    } else if (fs && fs.minimum_withdrawal > withdrawAmount) {
      errMsg = `Minimum withdrawal is ${fs.minimum_withdrawal} ${currency}`;
    }
    return errMsg;
  }

  const handleGetOTP = () => {
    const errMsg = handleVerifyRequest();
    console.log(errMsg);
    if (!errMsg) {
      const obj = {
        userId: auth.userId,
        currency: currency,
        amount: withdrawAmount,
        address: walletAddress,
        tag,
      };
      dispatch(withdrawAmountRequest(obj));
      setIsOTP(true);
    } else {
      setErrorMsg(errMsg);
    }
  }

  const handleWithdrawAmount = () => {
    let errMsg = null;
    if (!token) {
      errMsg = 'Something went wrong with your Token';
    } else if (!otp) {
      errMsg = 'Please enter your OTP.';
    }
    if (errMsg) {
      setErrorMsg(errMsg);
      return;
    }
    dispatch(withdrawOTPRequest({ userId: auth.userId, otp, token }));
  }

  return (
    <Modal show={isOpen} size="xl" centered onHide={onClose} animation={true}>
      <Modal.Header closeButton>
        <Modal.Title>Balance in wallet ({currency}): <span className="text-primary">{currencyValue || '0.00'}</span></Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label>Withdrawal Amount {currency} <span className="text-danger">*</span></Form.Label>
            <Form.Control type="number" min={0} disabled={isOTP} placeholder="Enter amount" name="amount" value={withdrawAmount} onChange={(e) => setWithdrawAmount(e.target.value)} />
          </Form.Group>
          {
            currency === "XRP" ? (
              <>
                <Form.Group>
                  <Form.Label>Destination Tag <span className="text-danger">* (Destination Tag cannot be changed once this form is submitted)</span></Form.Label>
                  <Form.Control type="text" disabled={noXRPTag || isOTP} placeholder="201101103" name="tag" value={tag} onChange={(e) => setTag(e.target.value)} />
                </Form.Group>
                <Form.Group>
                  <Form.Check type="checkbox" checked={noXRPTag} disabled={tag || isOTP} onChange={(e) => setNoXRPTag(e.target.checked)} label="Tag Not Required. (Do not check this box unless you are certain you do not need a tag)" />
                </Form.Group>
              </>
            ) : null
          }
          {
            AppConstants.FIAT_CURRENCIES[currency] ? null : (
              <Form.Group>
                <Form.Label>Withdrawal Address <span className="text-danger">* (This address cannot be changed once this form is submitted)</span></Form.Label>
                <Form.Control type="text" disabled={isOTP} placeholder={getCurrencyPlaceHolder(currency)} name="walletAddress" value={walletAddress} onChange={(e) => setWalletAddress(e.target.value)} />
              </Form.Group>
            )
          }
        </Form>
        {
          isOTP && (<Form.Group>
            <Form.Label>OTP <span className="text-danger">* </span></Form.Label>
            <Form.Control type="text" placeholder="Enter OTP" name="otp" value={otp} onChange={(e) => setOtp(e.target.value)} />
          </Form.Group>)
        }
        {(errorMsg || apiErrorMsg) && <Alert variant="danger" dismissible onClose={() => { setErrorMsg(''); setIsOTP(false); dispatch(clearWithdrawState()); }}>{errorMsg || apiErrorMsg}</Alert>}
        {(isSuccess) && <Alert variant="success" dismissible onClose={() => { dispatch(clearWithdrawState()); }}>{message}</Alert>}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={onClose}><i className="fa fa-times" /> Close </Button>
        {isOTP ? <Button variant="primary" disabled={isSubmitting} type="submit" onClick={handleWithdrawAmount}><i className="fa fa-check" /> Submit </Button>
          : <Button variant="primary" disabled={isSubmitting} type="submit" onClick={handleGetOTP}><i className="fa fa-key" /> Get OTP </Button>}
      </Modal.Footer>
    </Modal >
  );
}

export default Withdrawal;
