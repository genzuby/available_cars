// @flow
import React from 'react';
import type { Node } from 'react';
import { Spinner, Container } from 'react-bootstrap';
import { mainStyle } from '../../style/componentStyle';

function Loading(): Node {
  return (
    <Container
      fluid
      style={mainStyle}
      className="d-flex flex-column justify-content-center align-items-center"
      data-testid="notFound"
    >
      <Spinner
        animation="border"
        role="status"
        data-testid="loading"
        style={{ width: '100px', height: '100px' }}
      >
        <span className="sr-only">Loading...</span>
      </Spinner>
    </Container>
  );
}

export default Loading;
