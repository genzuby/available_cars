import { GET_AVAILABLE_CAR_LIST } from '../actions/constant';

export const carListReducer = (state = {}, action) => {
  if (action.type === GET_AVAILABLE_CAR_LIST) {
    return { ...state, ...action.payload };
  } else return state;
};
