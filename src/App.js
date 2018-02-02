import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SwipeableRoutes from 'react-swipeable-routes';

import Home from './components/Switches/Home';
import Boat from './components/Switches/Boat';
import Rates from './components/Switches/Rates';
import Policies from './components/Switches/Policies';
import About from './components/Switches/About';

import Typekit from 'react-typekit';



import Layout from './containers/Layout/Layout';

import './bulmaOverride.css';

import './App.css';



const App = ({ location }) => {
  return (
    <Router onUpdate={() => window.scrollTo(0, 0)}>
      <Layout>
        <Typekit kitId="bmb7wkn" />
        <SwipeableRoutes resistance>
          <Route path="/rates" component={Rates} />
          <Route path="/boats" component={Boat} />
          <Route path="/" exact component={Home} />
          <Route path="/policies" component={Policies} />
          <Route path="/about" component={About} />
        </SwipeableRoutes>
      </Layout>
    </Router>
  
  )
}


export default App;
