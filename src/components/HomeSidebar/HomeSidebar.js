import React from 'react';
import FacebookProvider, { Page } from 'react-facebook';
import Map from '../Home/Map';


import './HomeSidebar.css';

const HomeSidebar = (props) => {
  return (
    <div className="homesidebar">
    <div className="card sidebar">
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-4"></p>
          </div>
        </div>
        <Map />
        <FacebookProvider appId="565402577162682">
          <Page href="https://www.facebook.com/Lake-Monroe-Boat-Rental-INC-177394578979696/" tabs="timeline, messages" smallHeader="false" width="500" height="800" adaptContainerWidth={true} hideCover={true} showFacefile={true} />
        </FacebookProvider>
      </div>
    </div>
  </div>
  );
};

export default HomeSidebar;
