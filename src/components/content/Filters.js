import React, { useContext } from 'react';
import DropDown from './DropDown';
import { useDispatch } from 'react-redux';
import { InputGroup } from 'react-bootstrap';
import { getAvailableCarList } from '../../redux/actions';
import { FilterContext } from '../../contexts/FilterContext';
import useMedia from '../../hooks/useMedia';
import {
  inputGroupStyle,
  flexRowStyle,
  flexColumnStyle,
  BUTTON,
  BTN_WRAPPER,
} from '../../style/componentStyle';

function Filters() {
  const dispatch = useDispatch();
  const { filter, setFilter } = useContext(FilterContext);
  const [mediaType] = useMedia();

  const onClickFilter = () => {
    setFilter({ ...filter, page: 1 });
    dispatch(getAvailableCarList({ ...filter }));
  };

  const renderDropDown = () => {
    return (
      <>
        <DropDown type="color" />
        <DropDown type="manufacturers" />
      </>
    );
  };
  const renderMobileView = () => {
    return <div style={flexRowStyle}>{renderDropDown()}</div>;
  };

  const renderDeskTopView = () => {
    return <div style={flexColumnStyle}>{renderDropDown()}</div>;
  };

  return (
    <InputGroup style={inputGroupStyle} data-testid="filters">
      {mediaType === 'desktop' ? renderDeskTopView() : renderMobileView()}
      <BTN_WRAPPER justifyContent="flex-end">
        <BUTTON onClick={onClickFilter} data-testid="filter-button">
          Filter
        </BUTTON>
      </BTN_WRAPPER>
    </InputGroup>
  );
}

export default Filters;
