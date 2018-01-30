import React from 'react';

import './Sidebar.css';

const Sidebar = ({boat}) => {
  return (
    <div className="card boatsidebar is-size-5-desktop">
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <div className="title is-4 is-centered">Policies</div>
          </div>
        </div>

        <div className="content">
          <p>
            8 hour minimum on weekends or holidays for pontoons or Double Deckers
          </p>
          <p>
            4 hour minimuom on weekends or holidays for Ski Boats
          </p>
          <div className="title is-4 is-centered">Fuel Fees</div>
          <p>Pontoons and Double Deckers: $3 per hour
          </p>
          <p>Ski Boats: $9 per hour</p>
          <p>Jet Skis: $7 per hour</p>
        </div>
      </div>
    </div>
    );
};

export default Sidebar;
