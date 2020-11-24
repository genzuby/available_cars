import React from 'react';
import { Container } from 'react-bootstrap';
import { useHistory } from 'react-router';
import {
  mainStyle,
  LOGOIMG,
  PADDING,
  ACCENT_TEXT,
  TEXT_BTN_NORMAL,
} from '../../style/componentStyle';

function NotFound() {
  const history = useHistory();

  const onClickBackToList = () => {
    history.goBack();
  };

  return (
    <Container
      fluid
      style={mainStyle}
      className="d-flex flex-column justify-content-center align-items-center"
      data-testid="notFound"
    >
      <LOGOIMG
        className="align-self-center"
        src="/assets/logo.png"
        alt="Logo"
        width="300px"
      />
      <PADDING />
      <h1 style={{ fontWeight: 'bold' }}>404 - Not Found</h1>
      <PADDING />
      <ACCENT_TEXT>
        Sorry, the page you are looking for does not exist.
      </ACCENT_TEXT>
      <div className="d-flex flex-row">
        <ACCENT_TEXT>You can always go back to the</ACCENT_TEXT>
        <PADDING width="8px" />
        <TEXT_BTN_NORMAL fontSize="24px" onClick={onClickBackToList}>
          homepage
        </TEXT_BTN_NORMAL>
      </div>
    </Container>
  );
}

export default NotFound;
