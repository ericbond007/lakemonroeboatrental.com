import React from 'react';
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
            height: '93vh',
            transition: 'all .7s ease-out'
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
        <div id="herobottom">
        </div>
  </div>
  );
}

export default Hero;
