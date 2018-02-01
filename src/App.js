import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SwipeableRoutes from 'react-swipeable-routes';

import Home from './components/Switches/Home';
import Boat from './components/Switches/Boat';
import Rates from './components/Switches/Rates';
import Policies from './components/Switches/Policies';
import About from './components/Switches/About';



import Layout from './containers/Layout/Layout';

//import './bulmaVars.css';
import 'animate.css';

import './App.css';



const App = ({ location }) => {
  return (
    <Router onUpdate={() => window.scrollTo(0, 0)}>
      <Layout>
        <SwipeableRoutes resistance enableMouseEvents>
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
