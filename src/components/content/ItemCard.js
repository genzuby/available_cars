import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import { FavoritesContext } from '../../contexts/FavoritesContext';
import {
  TEXT_BTN,
  CARD_WRAPPER,
  DELETE_ICON,
  cardStyle,
  cardTitleStyle,
  CARD_IMG,
} from '../../style/componentStyle';

function ItemCard({ stockNumber, title, desc, imgUrl }) {
  const location = useLocation();
  const { deleteFavorite } = useContext(FavoritesContext);

  const renderDeleteFavoriteBtn = () => {
    if (location.pathname === '/favorites')
      return <DELETE_ICON onClick={() => deleteFavorite(stockNumber)} />;
  };

  return (
    <Card style={cardStyle} data-testid="itemCard">
      <Card.Body>
        <CARD_WRAPPER flexDirection="row">
          <CARD_IMG src={imgUrl} alt={title} width="120px" />
          <div>
            <Card.Title style={cardTitleStyle}>{title}</Card.Title>
            <Card.Text>{desc}</Card.Text>
            <Link
              to={{
                pathname: `/${stockNumber}`,
                state: { prevPath: location.pathname },
              }}
            >
              <TEXT_BTN>View Details</TEXT_BTN>
            </Link>
          </div>
        </CARD_WRAPPER>
      </Card.Body>
      {renderDeleteFavoriteBtn()}
    </Card>
  );
}

export default ItemCard;
