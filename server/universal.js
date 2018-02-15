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
import { loadFuel } from './actions/fuelActions';
import { loadAbout } from './actions/aboutActions';


const store = configureStore();
window.snapSaveState = () => ({
  "__PRELOADED_STATE__": store.getState()
});


store.dispatch(loadBoats());
store.dispatch(loadPolicies());
store.dispatch(loadHomepage());
store.dispatch(loadHours());
store.dispatch(loadFuel());
store.dispatch(loadAbout());

const rootElement = document.getElementById('root');


{/*if (rootElement.hasChildNodes()) {
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
}*/}

const context = {}
const markup = renderToString(
  <Provider store={store}>
    <StaticRouter
      location={req.url}
      context={context}
    >
      <App/>
    </StaticRouter>
  </Provider>
)
if (context.url) {
  // Somewhere a `<Redirect>` was rendered
  redirect(301, context.url)
} else {
  // we're good, send the response
  const RenderedApp = htmlData.replace('{{SSR}}', markup)
  res.send(RenderedApp)
}


registerServiceWorker();
