import React from 'react';
import { Container } from 'react-bootstrap';
import FavoriteCars from '../Content/FavoriteCars';
import { mainStyle } from '../../style/componentStyle';

function MyFavorites() {
  return (
    <Container
      fluid
      className="d-flex"
      style={mainStyle}
      data-testid="myFavorites"
    >
      <FavoriteCars />
    </Container>
  );
}

export default MyFavorites;
