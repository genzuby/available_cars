import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import {
  TEXT_BTN,
  CARD_WRAPPER,
  cardStyle,
  cardTitleStyle,
  CARD_IMG,
} from '../../style/componentStyle';

function ItemCard({ stockNumber, title, desc, imgUrl }) {
  return (
    <Card style={cardStyle}>
      <Card.Body>
        <CARD_WRAPPER flexDirection="row">
          <CARD_IMG src={imgUrl} alt={title} width="120px" />
          <div>
            <Card.Title style={cardTitleStyle}>{title}</Card.Title>
            <Card.Text>{desc}</Card.Text>
            <Link to={`/${stockNumber}`}>
              <TEXT_BTN>View Details</TEXT_BTN>
            </Link>
          </div>
        </CARD_WRAPPER>
      </Card.Body>
    </Card>
  );
}

export default ItemCard;
