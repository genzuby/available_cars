// @flow
import React, { useState, useContext } from 'react';
import type { Node } from 'react';
import { useSelector } from 'react-redux';
import { ListGroup } from 'react-bootstrap';
import { FilterContext } from '../../contexts/FilterContext';
import {
  dropdownlistStyle,
  DROPDOWN_WRAPPER,
  DROPDOWN_BTN,
  OPTION_WRAPPER,
  LABEL,
  LIST_ITEM,
} from '../../style/componentStyle';

function DropDown({ type }: { type: string }): Node {
  const [displayDropdown, setDisplayDropdown]: [
    boolean,
    ((boolean => boolean) | boolean) => void
  ] = useState(false);
  const { filter, setFilter } = useContext(FilterContext);
  const colorFilter = useSelector(state => state.colorFilter);
  const manufacturersFilter = useSelector(state => state.manufacturersFilter);

  const onClickFilterItem = (value: string) => {
    if (type === 'color') {
      setFilter({ ...filter, color: value });
    } else if (type === 'manufacturers') {
      setFilter({ ...filter, manufacturer: value });
    }

    setDisplayDropdown(false);
  };

  const renderDropDown = () => {
    const manufacturersNames = manufacturersFilter.reduce((acc, val) => {
      acc.push(val.name);
      return acc;
    }, []);
    const itemArray = type === 'color' ? colorFilter : manufacturersNames;

    return itemArray.map((item: string, idx: number) => (
      <ListGroup.Item
        action
        key={idx}
        style={{ padding: '0' }}
        onClick={() => onClickFilterItem(item)}
      >
        <LIST_ITEM>{item}</LIST_ITEM>
      </ListGroup.Item>
    ));
  };

  const renderFilter = () => {
    if (type === 'color') {
      return filter.color ? <p>{filter.color}</p> : 'All car colors';
    } else if (type === 'manufacturers') {
      return filter.manufacturer ? (
        <p>{filter.manufacturer}</p>
      ) : (
        'All manufacturers'
      );
    }
  };

  const hideDropdown = e => {
    if (e && e.relatedTarget) {
      e.relatedTarget.click();
    }
    setDisplayDropdown(false);
  };

  return (
    <OPTION_WRAPPER flexDirection="column" data-testid="dropdown">
      <LABEL>{type}</LABEL>
      <DROPDOWN_WRAPPER>
        <DROPDOWN_BTN
          onClick={() => setDisplayDropdown(!displayDropdown)}
          onBlur={hideDropdown}
          data-testid="dropdown-button"
        >
          {renderFilter()}
          <span className="--dropdown-arrow" />
        </DROPDOWN_BTN>
        <ListGroup
          style={{
            ...dropdownlistStyle,
            display: `${displayDropdown ? 'block' : 'none'}`,
          }}
          data-testid="dropdown-list"
        >
          {renderDropDown()}
        </ListGroup>
      </DROPDOWN_WRAPPER>
    </OPTION_WRAPPER>
  );
}

export default DropDown;
