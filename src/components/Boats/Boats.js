import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../SEO';

import './Boats.css';

class Boats extends Component {
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
          title="Boats | Lake Monroe Boat Rental"
          description="Located in Paynetown SRA"
          path="/"
        />
      
      <div className="content">
              <h1 className="landingTitle">Boats For Rent</h1>
              <Link to="/boats/doubledecker">
                <h2>
                  Double Decker w/ slide
                </h2>
              </Link>
              <img src="doubleDecker.jpg"  alt="Double Decker"/>
              <h2>
                Pontoon Boats
              </h2>
              <img src="pontoon.gif"  alt="Single Deck Pontoon"/>
              <h2>
                Ski Boats
              </h2>
              <img src="skiBoat.jpg"  alt="Ski Boat"/>
              <h2>
               Jet Skis 
              </h2>
              <img src="jetSki.jpg"  alt="Jet Ski"/>
              <h2>
                Canoes & Kayaks
              </h2>
              <img src="pontoon.gif"  alt="Double Decker"/>
              <h2>
               Fishing Boats 
              </h2>
              <img src="pontoon.gif"  alt="Double Decker"/>
              <h2>
                Water Accessories
              </h2>
              <img src="pontoon.gif"  alt="Double Decker"/>

            </div>
      </div>

    );
  }
}

export default Boats;
