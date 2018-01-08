import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SEO from '../SEO';


const Boat = (props) => (
  <div className="content">
    <h1 className="boatHeader">
      {props.location.state.boatname}
    </h1>
    <img src={props.location.state.boatimg} alt={props.location.state.boatimgalt} />
    
  </div>
)

Boat.contextTypes = {
  boatname: PropTypes.string
}

export default Boat;
