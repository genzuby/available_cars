import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import { useSelector } from 'react-redux';

function DropDown({ type }) {
  const [selectedValue, setSelectedValue] = useState('');
  const filter = useSelector(state => state.filter);

  return (
    <Dropdown>
      <Dropdown.Toggle id="dropdown-basic">
        All {type === 'color' ? 'car colors' : 'manufacturers'}
      </Dropdown.Toggle>
      <Dropdown.Menu></Dropdown.Menu>
    </Dropdown>
  );
}

export default DropDown;
