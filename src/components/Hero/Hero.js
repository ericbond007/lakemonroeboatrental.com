import React from 'react';
import NavBar from '../NavBar/NavBar';
import Sticky from '../Sticky/Sticky';
import ProgressiveImage from 'react-progressive-bg-image';


import './Hero.css';

const Hero = () => {
  return (
    <div className="heroWrapper">
        <ProgressiveImage
          src={'/img/landingImg-newBlur-1920w.jpg'}
          placeholder={'/img/landingImg-50px.jpg'}
          style={{
            backgroundSize: 'cover',
            height: '93vh'
          }}
          className="heroImg hero is-primary is-large" 
        >
      <div className="hero-body">
        <div className="container is-centered">
      
          <h1 className="title">
            Lake Monroe Boat Rental
          </h1>
        </div>
      </div>
        </ProgressiveImage>
  </div>
  );
}

export default Hero;
