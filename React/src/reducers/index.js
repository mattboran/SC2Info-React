import { combineReducers } from 'redux';
import * as actionConstants from '../actions/constants';
import { routerReducer } from 'react-router-redux';

function registration(state = {}, action){
  switch(action.type){
    case actionConstants.REGISTER_REQUEST:
      return { registering: true };
    case actionConstants.REGISTER_SUCCESS:
      return {};
    case actionConstants.REGISTER_FAILURE:
      return {};
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  registration,
  routing: routerReducer
});

export default rootReducer;
