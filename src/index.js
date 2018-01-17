import React from 'react';
import { hydrate, render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const rootElement = document.getElementById('root');

const renderApp = Component => {
if (rootElement.hasChildNodes()) {
  hydrate(
    <BrowserRouter>
        <Component />
    </BrowserRouter>,
    rootElement
  );
} else {
  render(
    <BrowserRouter>
        <Component />
    </BrowserRouter>,
    rootElement
  );
}
}

renderApp(App);

registerServiceWorker();
