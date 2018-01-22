import React, { Component } from 'react';
import SEO from '../SEO';
import Boats from './Boats';
import { Section, Container, Title, SubTitle } from 'reactbulma';
import Image from '../Image';
import Call from '../Call';
import HomeSlug from './HomeSlug';

import './Home.css';

const Home = (props) => {
  return (
      <div>
        <Section className="home">
          <Container>
            <div className="animated fadeIn slideInUp">
            <Image imgName="logo" imgAlt="LMBR Logo" className=""/>
            <h1 className="title is-1 is-spaced">Lake Monroe Boat Rental</h1>
            <h2 className="subtitle is-3"> Call to Reserve Today!</h2>
            <h3>
              <Call />
            </h3>
            <HomeSlug homepage={props.homepage} />
              <h4>
                Located just south east of Bloomingtion in Paynetown State Recreational Area
              </h4>
            </div>
              <div>
                <Image imgName="map" imgAlt="Map of Lake Monroe Boat Rental" className="boxedShadow lmbrMap" />

            </div>
          </Container>
        </Section>
      </div>
  
  );

};


export default Home;
