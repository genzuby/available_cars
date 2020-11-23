import { GET_CAR_DETAILINFO } from '../actions/constant';

export const carDetailReducer = (state = {}, action) => {
  if (action.type === GET_CAR_DETAILINFO) return action.payload;
  else return state;
};
