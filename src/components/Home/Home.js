import React from 'react';
import { Section } from 'reactbulma';
import Image from '../Image';
import Reserve from '../Reserve';
import HomeSlug from './HomeSlug';
import Hours from './Hours';
import FacebookProvider, { Page } from 'react-facebook';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';
import Scroll from '../react-scroll';

import './Home.css';

const Home = (props) => (
      <div className="home">
        <Section>
            <div className="animated fadeIn slideInUp">

              <img src="img/lmbrGray-lg_1x.png" alt="LMBR Logo" className="homeLogo" />
                <h1 className="title is-1 is-spaced fadeIn">Lake Monroe Boat Rental</h1>
                  <Reserve />
                  <HomeSlug homepage={props.homepage} />
                  <Fade left>
                    <Hours hours={props.hours} />
                  </Fade>
                  <div className="homeDescrip is-size-5-touch">
                    <p>
                      Since 1992, Lake Monroe Boat Rental is your choice for family fun on Lake Monroe! Rent our pontoons for a great day on the lake, or bring the whole family on our 34' Double Decker with slide.
                    </p>
                      <Scroll type="id" element="herobottom">
                    <div className="hoverText" style={{ width: '90%'}}>
                      <Link to="/boats/doubledecker">
                        <Image imgName="greenDD" imgAlt="Green Double Decker" className="homeImgDD" imgHover="Holds 24 people!"/>
                      </Link>
                    </div>
                    </Scroll>
                    <p>
                      Open April 1st through October 31st, Lake Monroe Boat Rental is now taking reservations. Book your boat now by calling us at 812-837-9909!
                    </p>
                  </div>
            </div>
            <div className="is-hidden-desktop">
              Like us on Facebook!
              <FacebookProvider appId="565402577162682">
                <Page href="https://www.facebook.com/Lake-Monroe-Boat-Rental-INC-177394578979696/" tabs="" smallHeader={false} width="500"  adaptContainerWidth={true} hideCover={true} showFacefile={false} />
        </FacebookProvider>
            </div>

        </Section>
      </div>
  
  );

export default Home;
