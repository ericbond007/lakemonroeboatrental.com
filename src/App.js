import React from 'react';
import { Route } from 'react-router-dom';

import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import withTracker from './components/withTracker';

import HomePage from './containers/HomePage/HomePage';
import BoatsPage from './containers/BoatsPage/BoatsPage';
import PoliciesPage from './containers/PoliciesPage/PoliciesPage';
import RatesPage from './containers/RatesPage/RatesPage';
import AboutPage from './containers/AboutPage/AboutPage';
import Typekit from 'react-typekit';

import BoatPage from './containers/BoatPage/BoatPage';
import AccessoriesPage from './containers/AccessoriesPage/AccessoriesPage';


import './bulmaOverride.css';

import './App.css';



const App = () => {
  return (
      <div>
        {/*
        <Hero />
        <NavBar />
        */}
        <Typekit kitId="bmb7wkn" />
          <Route path="/rates" component={withTracker(RatesPage)} />
          <Route path="/boats" exact component={withTracker(BoatsPage)} />

          <Route path="/" exact component={withTracker(HomePage)} />
          <Route path="/policies" component={withTracker(PoliciesPage)} />
          <Route path="/contact" component={withTracker(AboutPage)} />
          <Route path="/boats/:id" component={withTracker(BoatPage)} />
          <Route path="/accessories" component={withTracker(AccessoriesPage)} />
        <Footer />
      </div>
  )
}


export default App;
