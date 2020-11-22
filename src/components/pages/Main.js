import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import useInitalLoading from '../../hooks/useInitalLoading';
import Filters from '../Content/Filters';
import CarList from '../Content/CarList';
import { mainStyle } from '../../style/componentStyle';

function Main() {
  useInitalLoading();

  return (
    <Container className="container-fluid d-flex flex-fill" style={mainStyle}>
      <Row>
        <Col style={{ maxWidth: '400px' }}>
          <Filters />
        </Col>
        <Col className="column-fluid">
          <CarList />
        </Col>
      </Row>
    </Container>
  );
}

export default Main;
