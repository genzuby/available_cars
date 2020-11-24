import React from 'react';
import { InputGroup } from 'react-bootstrap';
import {
  inputGroupStyle,
  BUTTON,
  BTN_WRAPPER,
} from '../../style/componentStyle';

function Favorites({ stockNumber, onClickDelete, onClickAdd }) {
  return (
    <InputGroup style={inputGroupStyle} data-testid="favorites">
      <p>
        If you {stockNumber ? 'do not ' : ''}like this car, click the button and
        {stockNumber ? 'delete' : 'save'} it in your collection of favourite
        items.
      </p>

      <BTN_WRAPPER justifyContent="center">
        {stockNumber ? (
          <BUTTON onClick={onClickDelete}>delete</BUTTON>
        ) : (
          <BUTTON onClick={onClickAdd}>Save</BUTTON>
        )}
      </BTN_WRAPPER>
    </InputGroup>
  );
}

export default Favorites;
