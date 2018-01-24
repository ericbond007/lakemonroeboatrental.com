import React from 'react';
import 'react-table/react-table.css'
import { Section, Container, Message } from 'reactbulma';




import './Sidebar.css';

const Sidebar = (props) => {
  return (
    <div className="card sidebar">
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-4">Early Bird Jet Ski Special</p>
          </div>
        </div>

        <div className="content">
          Get out on the lake at the best time for jet ski's! All our jet ski's are $60 per hour when you rent and return by 11:30AM! The 4 hour rate is only $180!
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
