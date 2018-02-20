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
            <a rel="noopener noreferrer" target="_blank" href="https://www.google.com/maps/place/Lake+Monroe+Boat+Rental+Inc/@39.0817314,-86.4368141,17z/data=!3m1!4b1!4m5!3m4!1s0x886c654522e1fb7f:0x7e1299e6fcb7313!8m2!3d39.0817314!4d-86.4346254" className="is-centered"> 
              Click Here for Directions on Google Maps
            </a>
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
