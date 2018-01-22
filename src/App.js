import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SwipeableRoutes from 'react-swipeable-routes';

import HomePage from './containers/HomePage/HomePage';
import BoatsPage from './containers/BoatsPage/BoatsPage';
import BoatSwitch from './components/BoatSwitch';
import RatesPage from './containers/RatesPage/RatesPage';
import PoliciesPage from './containers/PoliciesPage/PoliciesPage';
import ContactPage from './containers/ContactPage/ContactPage';



import Layout from './components/Layout/Layout';

import './bulmaVars.css';
import 'animate.css';

import './App.css';



const App = ({ location }) => {
  return (
    <Router onUpdate={() => window.scrollTo(0, 0)}>
      <Layout>
        <SwipeableRoutes>
          <Route path="/rates" component={RatesPage} />
          <Route path="/boats" component={BoatSwitch} />
          <Route path="/" exact component={HomePage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/policies" component={PoliciesPage} />
        </SwipeableRoutes>
      </Layout>
    </Router>
  
  )
}


export default App;
