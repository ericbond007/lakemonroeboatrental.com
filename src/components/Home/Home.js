import React from 'react';
import SEO from '../SEO';
import Boats from './Boats';
import { Section, Container, Title, SubTitle, Button } from 'reactbulma';
import Image from '../Image';
import Call from '../Call';
import HomeSlug from './HomeSlug';
import Hours from './Hours';

import './Home.css';

const Home = (props) => (
      <div className="home">
        <Section>
            <div className="animated fadeIn slideInUp">
              <Image imgName="logo" imgAlt="LMBR Logo" className="homeLogo"/>
                <h1 className="title is-1 is-spaced">Lake Monroe Boat Rental</h1>
                  <Button primary large><h2 className=""> Call to Reserve Today!</h2></Button>
                  <h3>
                    <Call className="homeNumber"/>
                  </h3>
                  <HomeSlug homepage={props.homepage} />
                  <Hours hours={props.hours} />
                  <div className="homeDescrip">
                    <p>
                      Since 1992, Lake Monroe Boat Rental is your choice for family fun on Lake Monroe! Rent our pontoons for a great day on the lake, or bring the whole family on our 34' Double Decker with slide.
                    </p>
                    <Image imgName="greenDD" imgAlt="Green Double Decker" />
                    <p>
                      Open April 1st through October 31st, Lake Monroe Boat Rental is now taking reservations. Book your boat now by calling us at 812-837-9909!
                    </p>
                  </div>
            </div>

        </Section>
      </div>
  
  );

export default Home;
