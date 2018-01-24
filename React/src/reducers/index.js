import {combineReducers} from 'redux'
import * as usersReducer from './user'

const rootReducer = combineReducers(Object.assign(
  usersReducer,
));

export default rootReducer;
