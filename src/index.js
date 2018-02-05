import React from 'react';
import { hydrate, render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';


import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { loadBoats } from './actions/boatActions';
import { loadPolicies } from './actions/policyActions';
import { loadRates } from './actions/ratesActions';
import { loadHomepage } from './actions/homeActions';
import { loadHours } from './actions/hoursActions';
import { loadFuel } from './actions/fuelActions';
import { loadAbout } from './actions/aboutActions';

const preloadedState = window.__PRELOADED_STATE_
delete window.__PRELOADED_STATE__

const store = configureStore();

window.snapSaveState = () => ({
  "__PRELOADED_STATE__": store.getState()
})

store.dispatch(loadBoats());
store.dispatch(loadPolicies());
store.dispatch(loadHomepage());
store.dispatch(loadHours());
store.dispatch(loadFuel());
store.dispatch(loadAbout());

const rootElement = document.getElementById('root');

const renderApp = Component => {
if (rootElement.hasChildNodes()) {
  hydrate(
    <Provider store={store}>
      <BrowserRouter>
          <Component />
        </BrowserRouter>
    </Provider>,
    rootElement
  );
} else {
  render(
    <Provider store={store}>
      <BrowserRouter>
          <Component />
        </BrowserRouter>
    </Provider>,
    rootElement
  );
}
}
renderApp(App);


//registerServiceWorker();
