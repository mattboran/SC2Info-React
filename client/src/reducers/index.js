import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import registration from './registration';

function user(state = {}, action){
  return state;
}

const rootReducer = combineReducers({
  user,
  registration,
  routing: routerReducer
});

export default rootReducer;
