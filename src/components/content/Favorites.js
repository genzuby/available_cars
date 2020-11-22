import React, { useContext } from 'react';
import { InputGroup } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { FavoritesContext } from '../../contexts/FavoritesContext';
import {
  inputGroupStyle,
  BUTTON,
  BTN_WRAPPER,
} from '../../style/componentStyle';

function Favorites({ stockNumber }) {
  const { addFavorite, deleteFavorite } = useContext(FavoritesContext);
  const history = useHistory();

  const handleDeleteFavorite = () => {
    deleteFavorite(stockNumber);
    history.goBack();
  };

  return (
    <InputGroup style={inputGroupStyle}>
      <p>
        If you {stockNumber ? 'do not ' : ''}like this car, click the button and{' '}
        {stockNumber ? 'delete' : 'save'} it in your collection of favourite
        items.
      </p>
      <BTN_WRAPPER justifyContent="center">
        {stockNumber ? (
          <BUTTON onClick={handleDeleteFavorite}>delete</BUTTON>
        ) : (
          <BUTTON onClick={addFavorite}>Save</BUTTON>
        )}
      </BTN_WRAPPER>
    </InputGroup>
  );
}

export default Favorites;
