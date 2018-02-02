import React from 'react';

import './Sidebar.css';

const Sidebar = ({boat}) => {
  return (
    <div className="card sidebar is-size-5-desktop">
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-4">Policies</p>
          </div>
        </div>

        <div className="content">
          <p>
            8 hour minimum on weekends or holidays for pontoons or Double Deckers
          </p>
          <p>
            4 hour minimum on weekends or holidays for Ski Boats
          </p>
          <p>Feul Fees</p>
          <p>Pontoons and Double Deckers: $3 per hour up to 8 hours
          </p>
          <p>Ski Boats: $9 per hour up to 8 hours</p>
          <p>Jet Skis: $7 per hour up to 8 hours</p>
        </div>
      </div>
    </div>
    );
};

export default Sidebar;
