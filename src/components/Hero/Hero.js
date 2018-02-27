import React, { Component } from 'react';
import VideoCover from 'react-video-cover';


import './Hero.css';

class Hero extends Component {
  constructor() {
    super();
    this.state = {
      blurClass: '' 
    }
  }
  componentDidMount() {
    setTimeout(function() { this.setState({ blurClass: 'heroImgBig' }); }.bind(this), 2000);
  }
  render() {
  return (
    <div className={`heroWrapper ${this.state.blurClass} fadeIn`}>
      <div className="hero heroImg is-primary is-large">
        <VideoCover videoOptions={{
          src: '/vid/cover.mp4',
          autoPlay: true,
          loop: false
        }} />
      <div className="hero-body">
        <div className="container is-centered">
      
          <h1 className="title is-hidden">
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
