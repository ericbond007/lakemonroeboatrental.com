import React, { Component } from 'react';
import VideoCover from '../react-video-cover';
import Media from 'react-media';


import './Hero.css';

class Hero extends Component {
  constructor() {
    super();
    this.state = {
      blurClass: '' 
    }
  }
  componentDidMount() {
    setTimeout(function() { this.setState({ blurClass: 'heroImgBig' }); }.bind(this), 1000);
  }
  render() {
  return (
    <div className={`heroWrapper ${this.state.blurClass} fadeIn`}>
      <div className="hero heroImg is-primary is-large">
        <Media query={{maxWidth: '1220px', orientation: 'portrait'}}>
          {matches =>
          matches ? (
        <VideoCover videoOptions={{
          src: '/vid/mobileCover.mp4',
          autoPlay: true,
          loop: false,
        }} />
          ) : (
        <VideoCover videoOptions={{
          src: '/vid/cover.mp4',
          autoPlay: true,
          loop: false
        }} />
      )
      }
    </Media>
      <div className="hero-body is-hidden">
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
