import React, { Component } from 'react';
import SEO from '../SEO';

import './Policies.css';

class Policies extends Component {
  constructor() {
    super();
    this.state = {
      boats: []
    }
  }
  
  componentDidMount(prevProps) {
  }

  render() {
    return (
      <div>
        <SEO
          title="Policies | Lake Monroe Boat Rental"
          description="Located in Paynetown SRA"
          path="/"
        />
      
      <div className="content">
              <h1 className="landingTitle">Policies</h1>

            </div>
      </div>

    );
  }
}

export default Policies;
