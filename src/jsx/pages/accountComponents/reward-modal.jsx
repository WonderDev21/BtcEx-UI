import React from 'react';
import { Modal, Button, ListGroup } from 'react-bootstrap';

export default function RewardModal({ isOpen, onClose }) {
  return (
    <Modal show={isOpen} size="xl" centered onHide={onClose} animation={true}>
      <Modal.Header closeButton>
        <Modal.Title>Thank You for Registering on BtcEx!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p><b>BtcEx</b> is the most transparent exchange in India with daily audit reports that are accessible to anyone who wishes to verify it. BtcEx Exchange Token or BXC is our native exchange token. It is a utility token that will initially be used within the exchange for various functions.</p>

        <p>There are several use cases attached to BXC which will be revealed once we release the BXC Whitepaper 1.0 after the exchange launch. You are an early part of the BXC family and we want to thank you for being with us at this stage. As an expression of gratitude for your support, you will get 50 BXC tokens as a bonus for signing up.</p>

        <p>To unlock these tokens, you will have to complete the following steps:</p>

        <ListGroup variant="flush">
          <ListGroup.Item>Complete your KYC</ListGroup.Item>
          <ListGroup.Item>Execute a trade for at least $100. (The trade should be executed successfully. Partial or Cancelled orders would not be considered.)</ListGroup.Item>
        </ListGroup>
        <br />
        <p>Once you are done with these steps, 25 BXC tokens will instantly get unlocked and will be available for trading. The remaining 25 tokens will be released after a period of 2 months or after your daily trading volume exceeds $1000. There are more plans for BXC ahead. Let’s grow together!</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={onClose}> Close </Button>
      </Modal.Footer>
    </Modal >
  );
}
