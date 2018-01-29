import React from 'react';
import { Section, Container, Message } from 'reactbulma';




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
          Don't forget to get tube with your boat! We have pull behind tubes, skis, wake boards, and more available for rent. Call us at 812-837-990 for more information!
        </div>
      </div>
    </div>
  </div>
  );
};

export default BoatsSidebar;
