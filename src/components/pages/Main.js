import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import useInitalLoading from '../../hooks/useInitalLoading';
import useMedia from '../../hooks/useMedia';
import Filters from '../Content/Filters';
import AvailableCars from '../Content/AvailableCars';
import { mainStyle } from '../../style/componentStyle';

function Main() {
  useInitalLoading();
  const [mediaType] = useMedia();

  const renderMobileView = () => {
    return (
      <>
        <Row>
          <Filters />
        </Row>
        <Row>
          <AvailableCars />
        </Row>
      </>
    );
  };
  const renderDeskTopView = () => {
    return (
      <Row>
        <Col style={{ maxWidth: '400px' }}>
          <Filters />
        </Col>
        <Col style={{ margin: '0 48px 0 0' }}>
          <AvailableCars />
        </Col>
      </Row>
    );
  };

  return (
    <Container fluid style={mainStyle} data-testid="main">
      {mediaType === 'desktop' ? renderDeskTopView() : renderMobileView()}
    </Container>
  );
}

export default Main;
