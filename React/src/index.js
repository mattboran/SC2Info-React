import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';

import store, { history } from './storeIndex';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const Main = (
   <Provider store={store}>
    <Router  history={history}>
      <App />
    </Router>
  </Provider>
)

render(
    Main,
    document.getElementById('root')
);
registerServiceWorker();
