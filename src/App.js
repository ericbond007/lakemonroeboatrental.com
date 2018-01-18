import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import SwipeableRoutes from 'react-swipeable-routes';

import HomePage from './containers/HomePage/HomePage';
import BoatsPage from './containers/BoatsPage/BoatsPage';
import RatesPage from './containers/RatesPage/RatesPage';
import PoliciesPage from './containers/PoliciesPage/PoliciesPage';
import ContactPage from './containers/ContactPage/ContactPage';
import Boats from './components/Boats/Boats';
import Home from './components/Home/Home';


import Layout from './components/Layout/Layout';

import './bulmaVars.css';
import 'normalize.css';

import './App.css';

const firstChild = props => {
  const childrenArray = React.Children.toArray(props.children);
  return childrenArray[0] || null;
}

const App = ({ location }) => {
  return (
    <Router>
    <Layout>
    <SwipeableRoutes>
              <Route path="/" exact component={HomePage} />
              <Route path="/boats" component={BoatsPage} />
              <Route path="/rates" component={RatesPage} />
              <Route path="/policies" component={PoliciesPage} />
              <Route path="/contact" component={ContactPage} />
    </SwipeableRoutes>
    </Layout>
    </Router>
  
  )
}


export default App;
