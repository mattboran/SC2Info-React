import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware, syncHistoryWithStore } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const defaultState = {
  user: ''
}
export const history = createHistory();
const middleware = routerMiddleware(history);

export const store = createStore(
  rootReducer,
  defaultState,
  composeEnhancers(applyMiddleware(middleware))
);
//
//
// const store = createStore(
//   rootReducer,
//   defaultState,
//   composedEnhancers
// );
// export const history = syncHistoryWithStore(createBrowserHistory(), store);
// const enhancers = [];
// const middleware = [
//   thunk,
//   routerMiddleware(history)
// ];

export default store;
