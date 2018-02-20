import React from 'react';


import './Hero.css';

const Hero = () => {
  return (
    <div className="heroWrapper">
      <div className="hero heroImg is-primary is-large" style={{backgroundImage: '/img/landingImg-50px.jpg'}}>
      <div className="hero-body">
        <div className="container is-centered">
      
          <h1 className="title">
            Lake Monroe Boat Rental
          </h1>
        </div>
      </div>
        </div>
        <div id="herobottom">
        </div>
  </div>
  );
}

export default Hero;
