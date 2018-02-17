import React from 'react';
import { hydrate, render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';



import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { loadBoats } from './actions/boatActions';
import { loadPolicies } from './actions/policyActions';
import { loadHomepage } from './actions/homeActions';
import { loadHours } from './actions/hoursActions';
import { loadFAQ } from './actions/faqActions';


const store = configureStore();

window.snapSaveState = () => ({
  "__PRELOADED_STATE__": store.getState()
})


store.dispatch(loadBoats());
store.dispatch(loadPolicies());
store.dispatch(loadHomepage());
store.dispatch(loadHours());
store.dispatch(loadFAQ());

const rootElement = document.getElementById('root');


if (rootElement.hasChildNodes()) {
  hydrate(
    <Provider store={store}>
      <BrowserRouter>
          <App />
        </BrowserRouter>
    </Provider>,
    rootElement
  );
} else {
  render(
    <Provider store={store}>
      <BrowserRouter>
          <App />
        </BrowserRouter>
    </Provider>,
    rootElement
  );
}




registerServiceWorker();
