import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import useInitalLoading from '../../hooks/useInitalLoading';
import Filters from '../Content/Filters';
import AvailableCars from '../Content/AvailableCars';
import { mainStyle } from '../../style/componentStyle';

function Main() {
  useInitalLoading();

  return (
    <Container fluid style={mainStyle} data-testid="main">
      <Row>
        <Col style={{ maxWidth: '400px' }}>
          <Filters />
        </Col>
        <Col style={{ margin: '0 48px 0 0' }}>
          <AvailableCars />
        </Col>
      </Row>
    </Container>
  );
}

export default Main;
