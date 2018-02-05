import React from 'react';
import Directions from '../About/Directions';
import './ContactSidebar.css';

const ContactSidebar = (props) => {
  return (
    <div className="contactsidebar">
    <div className="card sidebar">
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-4 is-centered">
              Driving Directions
            </p>
          </div>
        </div>

        <div className="is-indent is-size-5-desktop">
          <Directions />
        </div>
      </div>
    </div>
  </div>
  );
};

export default ContactSidebar;
