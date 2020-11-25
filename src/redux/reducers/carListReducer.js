// @flow
import { GET_AVAILABLE_CAR_LIST } from '../actions/constant';

type CarInfoType = {
  stockNumber: number,
  manufacturerName: string,
  modelName: string,
  color: string,
  mileage: {
    number: number,
    unit: string,
  },
  fuelType: string,
  pictureUrl: string,
};

type State = {
  cars: Array<CarInfoType>,
  totalPageCount: number,
  totalCarsCount: number,
};
type Action = { type: string, payload: Object };

export const carListReducer = (state: State = {}, action: Action): State => {
  if (action.type === GET_AVAILABLE_CAR_LIST) {
    return { ...state, ...action.payload };
  } else return state;
};
