import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import thunk from 'redux-thunk';
import loggerMiddleware from 'redux-logger';
import rootReducer from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const defaultState = {
  user: ''
}
export const history = createHistory();
const middleware = (
  thunk,
  loggerMiddleware,
  routerMiddleware(history)
)

export const store = createStore(
  rootReducer,
  defaultState,
  composeEnhancers(applyMiddleware(middleware))
);
export default store;
