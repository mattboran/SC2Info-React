import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import registration from './registration';
import viewState from './view';
import login from './signin';

const rootReducer = combineReducers({
  login,
  registration,
  viewState,
  routing: routerReducer
});

export default rootReducer;
