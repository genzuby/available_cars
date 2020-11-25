// @flow
import { GET_MANUFACTURERS, GET_COLORS } from '../actions/constant';

type Action = { type: string, payload: Object };

const manufacturersReducer = (
  state: Array<string> = [],
  action: Action
): Array<string> => {
  if (action.type === GET_MANUFACTURERS) return action.payload.manufacturers;
  else return state;
};

const colorsReducer = (
  state: Array<string> = [],
  action: Action
): Array<string> => {
  if (action.type === GET_COLORS) return action.payload.colors;
  else return state;
};

export { manufacturersReducer, colorsReducer };
