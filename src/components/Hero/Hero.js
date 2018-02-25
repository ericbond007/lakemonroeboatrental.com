import React, { Component } from 'react';


import './Hero.css';

class Hero extends Component {
  constructor() {
    super();
    this.state = {
      blurClass: '' 
    }
  }
  componentDidMount() {
    setTimeout(function() { this.setState({ blurClass: 'heroImgBig' }); }.bind(this), 2500);
  }
  render() {
  return (
    <div className={`heroWrapper ${this.state.blurClass} fadeIn`}>
      <div className="hero heroImg is-primary is-large">
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

}

export default Hero;
