import { combineReducers } from 'redux';
import { colorsReducer, manufacturersReducer } from './filterReducer';
import { carListReducer } from './carListReducer';
import { carDetailReducer } from './carDetailReducer';

const rootReducers = combineReducers({
  colorFilter: colorsReducer,
  manufacturersFilter: manufacturersReducer,
  carList: carListReducer,
  carDetailInfo: carDetailReducer,
});

export default rootReducers;
