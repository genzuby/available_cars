// @flow
import { GET_CAR_DETAILINFO } from '../actions/constant';

type State = {
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
type Action = { type: string, payload: Object };

export const carDetailReducer = (state: State = {}, action: Action): State => {
  if (action.type === GET_CAR_DETAILINFO) return action.payload;
  else return state;
};
