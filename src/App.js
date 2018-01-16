import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import HomePage from './containers/HomePage/HomePage';
import BoatsPage from './containers/BoatsPage/BoatsPage';
import RatesPage from './containers/RatesPage/RatesPage.js';
import PoliciesPage from './containers/PoliciesPage/PoliciesPage.js';
import ContactPage from './containers/ContactPage/ContactPage.js';


import AppBar from './containers/AppBar/AppBar';
import Footer from './components/Footer/Footer';
import withTracker from './components/withTracker';

import './bulmaVars.css';
import 'normalize.css';

import './App.css';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <AppBar />
          <Route exact path="/" component={withTracker(HomePage)} />
            <Route path="/boats" component={withTracker(BoatsPage)} />
            <Route path="/rates" component={withTracker(RatesPage)} />
            <Route path="/policies" component={withTracker(PoliciesPage)} />
            <Route path="/contact" component={withTracker(ContactPage)} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
