import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore } from 'redux';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { createBrowserHistory } from 'history';
let history= createBrowserHistory();

// let store = createStore();
render(
  // <Provider store={store}>
  <Provider>
    <Router history={history}>
    <App />
    </Router>
  </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
