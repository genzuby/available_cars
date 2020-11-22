import React, { useContext } from 'react';
import DropDown from './DropDown';
import { useDispatch } from 'react-redux';
import { InputGroup } from 'react-bootstrap';
import { getAvailableCarList } from '../../redux/actions';
import { FilterContext } from '../../contexts/FilterContext';
import {
  inputGroupStyle,
  BUTTON,
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
        <BUTTON onClick={onClickFilter}>Filter</BUTTON>
      </BTN_WRAPPER>
    </InputGroup>
  );
}

export default Filters;
