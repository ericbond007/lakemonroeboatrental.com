import React from 'react';
import { hydrate, render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import store, { history } from './store';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const rootElement = document.getElementById('root');
if (rootElement.hasChildNodes()) {
  hydrate(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>, 
    rootElement
  );
} else {
  render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>, 
    rootElement
  );
}

registerServiceWorker();
