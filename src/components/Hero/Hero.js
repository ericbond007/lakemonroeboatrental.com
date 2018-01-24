import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import Sticky from '../Sticky/Sticky';

import './Hero.css';

const Hero = (props) => {
  return (
    <div className="hero is-primary is-large is-fullheight">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title">
            Lake Monroe Boat Rental
          </h1>
        </div>
      </div>
      <div className="hero-foot">
        <Sticky>
          <NavBar />
        </Sticky>
      </div>
    </div>
  );
};

export default Hero;
