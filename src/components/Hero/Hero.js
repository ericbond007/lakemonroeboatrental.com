import React from 'react';
import ProgressiveImage from 'react-progressive-bg-image';


import './Hero.css';

const Hero = () => {
  return (
    <div className="heroWrapper">
        <ProgressiveImage
          src={'/img/newHero-lg_1x.jpg'}
          placeholder={'/img/landingImg-50px.jpg'}
          style={{
            backgroundSize: 'cover',
            height: '93vh',
            transition: 'all .7s ease-out',
            backgroundPositionX: '65%',
            backgroundAttachment: 'fixed',
            backgroundPosition: 'center'
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
