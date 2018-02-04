import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import registration from './registration';
import login from './signin';

const rootReducer = combineReducers({
  login,
  registration,
  routing: routerReducer
});

export default rootReducer;
