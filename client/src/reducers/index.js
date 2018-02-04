import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import registration from './registration';
import login from './signin';

function user(state = {}, action){
  return state;
}

const rootReducer = combineReducers({
  user,
  login,
  registration,
  routing: routerReducer
});

export default rootReducer;
