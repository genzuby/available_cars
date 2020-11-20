import { combineReducers } from 'redux';
import { colorsReducer, manufacturersReducer } from './filterReducer';

const rootReducers = combineReducers({
  colorFilter: colorsReducer,
  manufacturersFilter: manufacturersReducer,
});

export default rootReducers;
