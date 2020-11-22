import React from 'react';
import { Button, InputGroup } from 'react-bootstrap';
import useLocalStorage from '../../hooks/useLocalStorage';
import { useSelector } from 'react-redux';
import {
  inputGroupStyle,
  btnNoremalStyle,
  BTN_WRAPPER,
} from '../../style/componentStyle';

const LOCAL_STOAGE_KEY = '`AUTO1_MY_FAVORITE_CAR`';
function Favorites() {
  const carDetailInfo = useSelector(state => state.carDetailInfo);
  const { addLocalStorage } = useLocalStorage();
  return (
    <InputGroup style={inputGroupStyle}>
      <p>
        If you like this car, click the button and save it in your collection of
        favourite items.
      </p>
      <BTN_WRAPPER justifyContent="flex-end">
        <Button
          style={btnNoremalStyle}
          onClick={() => addLocalStorage(LOCAL_STOAGE_KEY, carDetailInfo)}
        >
          Save
        </Button>
      </BTN_WRAPPER>
    </InputGroup>
  );
}

export default Favorites;
