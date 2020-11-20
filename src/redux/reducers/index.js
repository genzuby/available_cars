import { combineReducers } from 'redux';
import filterReducer from './filterReducer';

const rootReducers = combineReducers({
  filter: filterReducer,
});

export default rootReducers;
