import React, { Component } from 'react';
import SEO from '../SEO';
import Boats from './Boats';

import './Home.css';

class Home extends Component {
  

  render() {

    return (
      <div>
        <SEO
          title="Lake Monroe Boat Rental"
          description="Located in Paynetown SRA"
          path="/"
        />
      
      <div className="content">
              <h1 className="landingTitle">Lake Monroe Boat Rental</h1>
              <h2>
                Call to Reserve Today!
              </h2>
              <h2>
                812-837-9474
              </h2>
              Located just south east of Bloomingtion in Paynetown State Recreational Area
              <img src="lmbrMap-min.png" className="boxedShadow lmbrMap" alt="Map of LMBR"/>
            <Boats />
          </div>
      </div>
    );
  }
}

export default Home;
