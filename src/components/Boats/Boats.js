import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BoatLink from '../BoatLink/BoatLink';
import SEO from '../SEO';

import './Boats.css';

class Boats extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boats: []
    }
  }
  
  componentDidMount() {
    let dataURL = "https://balcarth.com/wordpress/wp-json/wp/v2/boats?_embed";
    fetch(dataURL)
      .then(res => res.json())
      .then(res => {
        this.setState({
          boats: res
        })
      })
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
              <BoatLink boatname="Double Decker" boatimg="doubleDecker.jpg" boatimgalt="Double Decker" boatlink="doubledecker"  {...this.state} />
                <Link to="/boats/pontoon">
                  <h2>
                    Pontoon Boats
                  </h2>
                  <img src="pontoon.gif"  alt="Single Deck Pontoon"/>
                </Link>
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
