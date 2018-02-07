import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SwipeableRoutes from 'react-swipeable-routes';

import Home from './components/Switches/Home';
import Boat from './components/Switches/Boat';
import Rates from './components/Switches/Rates';
import Policies from './components/Switches/Policies';
import About from './components/Switches/About';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer';
import { Section } from 'reactbulma'
import NavBar from './components/NavBar/NavBar';

import HomePage from './containers/HomePage/HomePage';
import Typekit from 'react-typekit';



import Layout from './containers/Layout/Layout';

import './bulmaOverride.css';

import './App.css';



const App = () => {
  return (
      <div>
        <Hero />
        <NavBar />
        <Typekit kitId="bmb7wkn" />
        <SwipeableRoutes animateHeight resistance springConfig={{
          duration: '0.5s',
            easeFunction: 'cubic-bezier(0.175, 0.885, 0.32, 1)',
            delay: '0.0s'
        }}
        slideStyle={{
        }}
        hysteresis='0.7'
        threshold='10'
        >
          <Route path="/rates" component={Rates} />
          <Route path="/boats" component={Boat} />
          <Route path="/" exact component={HomePage} />
          <Route path="/policies" component={Policies} />
          <Route path="/contact" component={About} />
        </SwipeableRoutes>
        <Footer />
      </div>
  )
}


export default App;
