import React from 'react';
import { Alert, Button } from 'react-bootstrap';

function AlertMsg({ show, title, message, onClickConfirm, onClickDismiss }) {
  return (
    <Alert
      show={show}
      variant="success"
      style={{ padding: '48px 48px 24px 48px' }}
      data-testid="alertMsg"
    >
      <Alert.Heading>{title}</Alert.Heading>
      <p>{message}</p>
      <hr />
      <div className="d-flex justify-content-end">
        <Button
          onClick={onClickConfirm}
          variant="outline-success"
          style={{ margin: '0 12px' }}
        >
          Confirm
        </Button>
        <Button onClick={onClickDismiss} variant="outline-secondary">
          Dismiss
        </Button>
      </div>
    </Alert>
  );
}

export default AlertMsg;
