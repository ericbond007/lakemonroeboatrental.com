import React from 'react';
import { Link } from 'react-router-dom';
import Scroll from '../react-scroll';
import './Sidebar.css';

const Sidebar = ({boat}) => {
  return (
    <div className="boatssidebar">
    <div className="card sidebar is-size-5-desktop">
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-4 has-text-centered">Policies</p>
          </div>
        </div>

        <div className="has-text-left">
          <p>
            8 hour minimum on weekends or holidays for pontoons or Double Deckers
          </p>
          <p>
            4 hour minimum on weekends or holidays for Ski Boats
          </p>
          <Scroll type="id" element="herobottom">
            <div>
            <Link to="/policies">
              Click here for more policy info
            </Link>
          </div>
        </Scroll>
          <p className="title is-4 has-text-centered" style={{marginTop: '2rem'}}>Fuel Fees</p>
          <div className="has-text-left">
          <p>Pontoons and Double Deckers: $3 per hour up to 8 hours
          </p>
          <p>Ski Boats: $9 per hour up to 8 hours</p>
          <p>Jet Skis: $7 per hour up to 8 hours</p>
          <Scroll type="id" element="herobottom">
            <div>
          <Link to="/rates">All Boat and Fuel Rates</Link>
          </div>
        </Scroll>
        </div>
        </div>
      </div>
    </div>
  </div>
    );
};

export default Sidebar;
