//@flow
import React from 'react';
import type { Node } from 'react';
import { Alert, Button } from 'react-bootstrap';

type Props = {
  show: boolean,
  title: string,
  message: string,
  onClickConfirm: () => void,
  onClickDismiss: () => void,
};

function AlertMsg({
  show,
  title,
  message,
  onClickConfirm,
  onClickDismiss,
}: Props): Node {
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
