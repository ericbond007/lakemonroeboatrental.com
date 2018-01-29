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

        <div className="leftAlign is-size-5-desktop">
          <p>
            Don't forget to get tube with your boat! We have pull behind tubes, skis, wake boards, and more available for rent. Call us at 812-837-990 for more information!
          </p>
          <br />
          <p>
            Life jackets are provided for every rental. Boats come with life jackets aboard. Children's vests are given at time of check-in.
          </p>
        </div>
      </div>
    </div>
  </div>
  );
};

export default BoatsSidebar;
