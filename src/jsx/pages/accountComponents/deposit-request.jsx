import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Alert, Modal, Button, Form } from 'react-bootstrap';

import { makeDepositRequest, clearDepositRequest } from '../../../actions/accounts/index';

const depositOptions = [
  { text: 'RTGS/CHATS', value: 'RTGS/CHATS' },
  { text: 'FPS', value: 'FPS' },
  { text: 'TT', value: 'TT' },
  { text: 'Cheque', value: 'Cheque' },
  { text: 'ATM', value: 'ATM' }
];

function DepositRequest({ isOpen, onClose }) {
  const [amount, setAmount] = useState('');
  const [txnRef, setTxnRef] = useState('');
  const [transferType, setTransferType] = useState('');
  const [message, setMessage] = useState('');
  const [receipt, setReceipt] = useState('');
  const [error, setError] = useState('');
  const currency = "USD";

  const { auth, depositRequest } = useSelector(state => ({ auth: state.auth, depositRequest: state.depositRequest }));
  const dispatch = useDispatch();

  const handleVerifyDeposit = () => {
    console.log(amount, txnRef, transferType, message, receipt);
    let errorMsg = null;
    if (!currency) {
      errorMsg = 'Currency is required';
    } else if (Number.isNaN(parseFloat(amount)) || parseFloat(amount) <= 0) {
      errorMsg = 'Amount should be greater than 0';
    } else if (!receipt) {
      errorMsg = 'Bank transaction receipt is required';
    } else if (currency === "USD") {
      if (!txnRef) {
        errorMsg = 'Bank transaction reference no. is required';
      } else if (!transferType) {
        errorMsg = 'Transfer Type is required';
      }
    }
    return errorMsg;
  }

  const handleDepositRequest = () => {
    const errorMsg = handleVerifyDeposit();
    const data = { currency, amount, txnRef, transferType };
    if (message) {
      data.message = message;
    }
    if (!errorMsg) {
      const formData = new FormData();
      formData.append('receipt', receipt);
      formData.append('json', JSON.stringify(data));
      console.log(formData);
      dispatch(makeDepositRequest({ userId: auth.userId, data: formData }));
    } else {
      console.log(errorMsg);
      setError(errorMsg);
    }
  }

  return (
    <Modal show={isOpen} size="xl" centered onHide={onClose} animation={true}>
      <Modal.Header closeButton>
        <h4><i className="fa fa-dollar" /> Deposit Request</h4>
      </Modal.Header>
      <Modal.Body>
        <p className="text-primary">Create deposit request after you make a deposit from your Bank Account.</p>
        <Form>
          <div className="row">
            <div className="col-sm-12 col-lg-6 col-xl-6">
              <Form.Group>
                <Form.Label>Amount <span className="text-danger">*</span></Form.Label>
                <Form.Control type="number" min={0} placeholder="Enter amount" name="amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
              </Form.Group>
            </div>
            <div className="col-sm-12 col-lg-6 col-xl-6">
              <Form.Group>
                <Form.Label>Bank Txn/Ref No. <span className="text-danger">*</span></Form.Label>
                <Form.Control type="text" placeholder="Enter transaction reference number." name="txnRef" value={txnRef} onChange={(e) => setTxnRef(e.target.value)} />
              </Form.Group>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 col-lg-6 col-xl-6">
              <Form.Group>
                <Form.Label>Transfer Type <span className="text-danger">*</span></Form.Label>
                <Form.Control as="select" name="transferType" value={transferType} onChange={(e) => setTransferType(e.target.value)}>
                  <option value=''>-- Select Transfer Type --</option>
                  {depositOptions.map((optionItem, index) => (<option value={optionItem.value} key={index}>{optionItem.text}</option>))}
                </Form.Control>
              </Form.Group>
            </div>
            <div className="col-sm-12 col-lg-6 col-xl-6">
              <Form.Group>
                <Form.Label>Upload Bank transaction receipt <span className="text-danger">*</span></Form.Label>
                <Form.File inputAs="input" id="transferTypeDocs" accept="image/*,.pdf" onChange={(e) => setReceipt(e.target.files[0])} />
                <Form.Text className="font-italic">* File size should be less than 3 MB.</Form.Text>
              </Form.Group>
            </div>
          </div>
          <Form.Group>
            <Form.Label>Remark</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Other information (optional)" name="message" value={message} onChange={(e) => setMessage(e.target.value)} />
          </Form.Group>
        </Form>
        { depositRequest.isSuccess && <Alert variant="success" dismissible onClose={() => dispatch(clearDepositRequest()) }>Deposit request successfully submitted.</Alert> }
        { (error || depositRequest.isError) && <Alert variant="danger" dismissible onClose={() => {setError(''); dispatch(clearDepositRequest());}}>{error || depositRequest.errorMsg}</Alert> }
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={onClose}><i className="fa fa-times" /> Close </Button>
        <Button variant="primary" disabled={depositRequest.isSubmitting} type="submit" onClick={handleDepositRequest}><i className="fa fa-check" /> Submit </Button>
      </Modal.Footer>
    </Modal >
  );
}

export default DepositRequest;
