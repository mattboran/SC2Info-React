import {combineReducers} from 'redux'
import { routerReducer } from 'react-router-redux';
import * as userReducer from './user'

const rootReducer = combineReducers({
  user: userReducer,
  routing: routerReducer
});

export default rootReducer;
