import React from 'react';
import Call from './Call.js';
import Media from 'react-media';
import { Section, Button } from 'reactbulma';
import { Link } from 'react-router-dom';

const PolicyButton = () => (
  <div className="policyButton is-size-1-desktop is-centered" style={{marginTop: '-10vh'}}>
    <div className="button is-primary is-large ripple">
  <Link to="/policies">
      <h3 style={{color: '#fff'}}>Policies</h3>
    </Link>
  </div>
</div>
);

export default PolicyButton;
