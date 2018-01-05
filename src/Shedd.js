import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import HomePage from './containers/HomePage/HomePage';
import ProductsPage from './containers/ProductsPage/ProductsPage';
import DeliPage from './containers/DeliPage/DeliPage';
import StoryPage from './containers/StoryPage/StoryPage';
import FishingPage from './containers/FishingPage/FishingPage';
import LinksPage from './containers/LinksPage/LinksPage';
import MapsPage from './containers/MapsPage/MapsPage';
import AppBar from './containers/AppBar/AppBar';
import Footer from './components/Footer/Footer';


import './App.css';

class Shedd extends Component {
  render() {
    return (
      <Router>
      <div>
      <AppBar />
<Route exact path="/" component={HomePage} />
        <Route path="/deli" component={DeliPage} />
        <Route path="/products" component={ProductsPage} />
        <Route path="/story" component={StoryPage} />
        <Route path="/fishing" component={FishingPage} />
        <Route path="/links" component={LinksPage} />
        <Route path="/map" component={MapsPage} />


        <Route component={Footer} />
      </div>
      </Router>
    );
  }
}

export default Shedd;
