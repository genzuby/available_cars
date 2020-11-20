import { GET_MANUFACTURERS, GET_COLORS } from '../actions/constant';

const manufacturersReducer = (state = [], action) => {
  if (action.type === GET_MANUFACTURERS) return action.payload.manufacturers;
  else return state;
};

const colorsReducer = (state = [], action) => {
  if (action.type === GET_COLORS) return action.payload.colors;
  else return state;
};

export { manufacturersReducer, colorsReducer };
