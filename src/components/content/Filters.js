import React, { useContext } from 'react';
import DropDown from './DropDown';
import { useDispatch } from 'react-redux';
import { Button, InputGroup } from 'react-bootstrap';
import { getAvailableCarList } from '../../redux/actions';
import { FilterContext } from '../../contexts/FilterContext';
import {
  inputGroupStyle,
  btnNoremalStyle,
  BTN_WRAPPER,
} from '../../style/componentStyle';

function Filters() {
  const dispatch = useDispatch();
  const { filter, setFilter } = useContext(FilterContext);

  const onClickFilter = () => {
    setFilter({ ...filter, page: 1 });
    dispatch(getAvailableCarList({ ...filter }));
  };

  return (
    <InputGroup style={inputGroupStyle}>
      <DropDown type="color" />
      <DropDown type="manufacturers" />
      <BTN_WRAPPER justifyContent="flex-end">
        <Button style={btnNoremalStyle} onClick={onClickFilter}>
          Filter
        </Button>
      </BTN_WRAPPER>
    </InputGroup>
  );
}

export default Filters;
