import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../Image';
import './BoatsSidebar.css';

const BoatsSidebar = (props) => {
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
          <Link to="/boats/accessories" style={{ textDecoration: 'none', color: '#4a4a4a' }}>
            <Image imgName="tube" imgAlt="Pull behind water tube" className="lmbrMap" />
            Don't forget to get tube with your boat! We have pull behind tubes, skis, wake boards, and more available for rent. Click here to see more info!
          </Link>
        </div>
      </div>
    </div>
  </div>
  );
};

export default BoatsSidebar;
