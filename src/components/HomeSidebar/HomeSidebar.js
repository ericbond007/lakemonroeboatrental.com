import React from 'react';
import { Section, Container, Message } from 'reactbulma';




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

        <div className="">
          Like us on Facebook!
          <div class="fb-page" 
            data-href="https://www.facebook.com/Lake-Monroe-Boat-Rental-INC-177394578979696/" 
            data-tabs="timeline,messages" 
            data-width="450"
            data-height="800"
            data-small-header="false" 
            data-adapt-container-width="true" 
            data-hide-cover="true" 
            data-show-facepile="true">
              <blockquote cite="https://www.facebook.com/Lake-Monroe-Boat-Rental-INC-177394578979696/" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/Lake-Monroe-Boat-Rental-INC-177394578979696/">Lake Monroe Boat Rental, INC</a></blockquote></div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default HomeSidebar;
