import React from 'react';
import { Section } from 'reactbulma';
import Image from '../Image';
import Reserve from '../Reserve';
import HomeSlug from './HomeSlug';
import Hours from './Hours';

import './Home.css';

const Home = (props) => (
      <div className="home">
        <Section>
            <div className="animated fadeIn slideInUp">
              <Image imgName="logo" imgAlt="LMBR Logo" className="homeLogo"/>
                <h1 className="title is-1 is-spaced">Lake Monroe Boat Rental</h1>
                  <Reserve />
                  <HomeSlug homepage={props.homepage} />
                  <Hours hours={props.hours} />
                  <div className="homeDescrip">
                    <p>
                      Since 1992, Lake Monroe Boat Rental is your choice for family fun on Lake Monroe! Rent our pontoons for a great day on the lake, or bring the whole family on our 34' Double Decker with slide.
                    </p>
                    <Image imgName="greenDD" imgAlt="Green Double Decker" className="homeImg" />
                    <p>
                      Open April 1st through October 31st, Lake Monroe Boat Rental is now taking reservations. Book your boat now by calling us at 812-837-9909!
                    </p>
                  </div>
            </div>
            <div className="is-hidden-desktop">
              Like us on Facebook!
<div className="fb-page" data-href="https://www.facebook.com/Lake-Monroe-Boat-Rental-INC-177394578979696/" data-height="350" data-small-header="true" data-adapt-container-width="true" data-hide-cover="true" data-show-facepile="true"><blockquote cite="https://www.facebook.com/Lake-Monroe-Boat-Rental-INC-177394578979696/" className="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/Lake-Monroe-Boat-Rental-INC-177394578979696/">Lake Monroe Boat Rental, INC</a></blockquote></div>
            </div>

        </Section>
      </div>
  
  );

export default Home;
