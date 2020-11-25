//@flow
import React from 'react';
import type { Node } from 'react';
import ItemCard from './ItemCard';

function CarList({ carList }: { carList: [] }): Node {
  const renderCarList = () => {
    if (carList) {
      return carList.map((car, index) => {
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

  return <div data-testid="carList">{renderCarList()}</div>;
}

export default CarList;
