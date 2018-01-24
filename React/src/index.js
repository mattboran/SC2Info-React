import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { createBrowserHistory  } from 'history';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import reducer from  './reducers';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const logger = createLogger({});

function configureStore(initialState){
  const reducers = combineReducers({
    ...reducer,
    routing: routerReducer
  });
  const enhancer = compose(
    applyMiddleware(
      thunkMiddleware,
      logger
    )
  );
  return createStore(reducers, initialState, enhancer);
}

const store = configureStore({});
const browserHistory = createBrowserHistory();
const history= syncHistoryWithStore(browserHistory, store);

render(
  <Provider store={store}>
    <Router history={history}>
    <App />
    </Router>
  </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
