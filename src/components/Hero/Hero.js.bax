import React from 'react';
import NavBar from '../NavBar/NavBar';
import Sticky from '../Sticky/Sticky';
import ProgressiveImage from 'react-progressive-bg-image';



import './Hero.css';

const Hero = (props) => {
  return (
    <div>
        <ProgressiveImage
          src={'/img/landingImg-newBlur-1920w.jpg'}
          placeholder={'/img/landingImg-50px.jpg'}
          style={{
            backgroundSize: 'cover',
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6))`
          }}
          className="hero is-primary is-large is-fullheight heroImg"
        >
      
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title">
            Lake Monroe Boat Rental
          </h1>
        </div>
      </div>
      <div className="hero-foot">
        <Sticky id="navbar">
          <NavBar />
        </Sticky>
      </div>
    </ProgressiveImage>
  </div>
  );
}

export default Hero;
