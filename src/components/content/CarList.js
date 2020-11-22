import React, { useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FilterContext } from '../../contexts/FilterContext';
import { getAvailableCarList } from '../../redux/actions';
import ItemCard from './ItemCard';
import { LIST_CONTENT } from '../../style/componentStyle';
import Pagination from './Pagination';

function CarList() {
  const carList = useSelector(state => state.carList);
  const dispatch = useDispatch();
  const { filter, setFilter } = useContext(FilterContext);

  const onClickPagenation = page => {
    setFilter({ ...filter, page });
    dispatch(getAvailableCarList({ ...filter, page }));
  };

  const renderCarList = () => {
    if (carList.cars) {
      return carList.cars.map((car, index) => {
        const title = `${car.manufacturerName} ${car.modelName}`;
        const desc = `Stock #${car.stockNumber} - ${car.mileage.number} ${car.mileage.unit} - ${car.fuelType}`;
        return (
          <ItemCard
            key={index}
            stockNumber={car.stockNumber}
            title={title}
            desc={desc}
            imgUrl={car.pictureUrl}
          />
        );
      });
    }
  };

  return (
    <LIST_CONTENT>
      <h3 className="--list-title">Available cars</h3>
      <p className="--list-desc">
        Showing 10 of {carList.totalCarsCount} results
      </p>
      {renderCarList()}
      <Pagination
        page={filter.page}
        totalPage={carList.totalPageCount}
        onClickPagenation={onClickPagenation}
      />
    </LIST_CONTENT>
  );
}

export default CarList;
