import { GET_MANUFACTURERS, GET_COLORS } from '../actions/constant';

const filterReducer = (state = [], action) => {
  switch (action.type) {
    case GET_MANUFACTURERS:
      return action.payload;
    case GET_COLORS:
      return action.payload;
    default:
      return state;
  }
};

export default filterReducer;
