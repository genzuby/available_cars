import React, { useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FilterContext } from '../../contexts/FilterContext';
import { getAvailableCarList } from '../../redux/actions';
import CarList from './CarList';
import { LIST_CONTENT } from '../../style/componentStyle';
import Pagination from './Pagination';

function AvailableCars() {
  const carList = useSelector(state => state.carList);
  const dispatch = useDispatch();
  const { filter, setFilter } = useContext(FilterContext);

  const onClickPagenation = page => {
    setFilter({ ...filter, page });
    dispatch(getAvailableCarList({ ...filter, page }));
  };

  return (
    <LIST_CONTENT>
      <h3 className="--list-title">Available cars</h3>
      <p className="--list-desc">
        Showing 10 of {carList.totalCarsCount} results
      </p>
      <CarList carList={carList.cars} />
      <Pagination
        page={filter.page}
        totalPage={carList.totalPageCount}
        onClickPagenation={onClickPagenation}
      />
    </LIST_CONTENT>
  );
}

export default AvailableCars;
