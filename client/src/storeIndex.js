import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers';

const defaultState = {
  user: '',
  routing: routerMiddleware
}

export const history = createHistory();

const loggerMiddleware = createLogger();

 const store = createStore(
  rootReducer,
  defaultState,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware,
    routerMiddleware(history)
  )
);
export default store;
