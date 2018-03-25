import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Image from '../Image';
import './BoatsSidebar.css';
import ReactGA from 'react-ga';

ReactGA.initialize('UA-101048517-2');

class BoatsSidebar extends Component {

  water() {
    ReactGA.event({
      category: 'Website Interactions',
      action: 'Clicked Accessories from Boats Sidebar'
    });
  }
  render() {
    return (
    <div className="boatssidebar">
    <div className="card sidebar">
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-4 is-centered">
              Water Accesories
            </p>
          </div>
        </div>

        <div className="is-indent is-size-5-desktop">
          <Link to="/accessories" style={{ textDecoration: 'none', color: '#4a4a4a' }}>
            <Image imgName="tube" imgAlt="Pull behind water tube" className="lmbrMap" />
            Don't forget to get tube with your boat! We have pull behind tubes, skis, wake boards, and more available for rent. Click here to see more info!
          </Link>
        </div>
      </div>
    </div>
  </div>
    );
  }
}

export default BoatsSidebar;
