import React, { useEffect } from 'react';
import DropDown from './DropDown';
import { useDispatch } from 'react-redux';
import { getColorsList, getManufaturersList } from '../../redux/actions';

function Filters() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getColorsList());
    dispatch(getManufaturersList());
  }, []);

  return (
    <div>
      <DropDown type="color" />
      <DropDown type="manufaturers" />
    </div>
  );
}

export default Filters;
