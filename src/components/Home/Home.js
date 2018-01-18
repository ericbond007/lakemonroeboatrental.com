import React, { Component } from 'react';
import SEO from '../SEO';
import Boats from './Boats';
import { Section, Container, Title, SubTitle } from 'reactbulma';
import Image from '../Image';
import Call from '../Call';

import './Home.css';

class Home extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  

  render() {

    return (
      <div>
        <SEO
          title="Lake Monroe Boat Rental"
          description="Located in Paynetown SRA"
          path="/"
        />
        <Section className="home">
          <Container>
            <div className="animated fadeIn slideInUp">
            <Image imgName="logo" imgAlt="LMBR Logo" className=""/>
            <h1 className="title is-1 is-spaced">Lake Monroe Boat Rental</h1>
            <h2 className="subtitle is-3"> Call to Reserve Today!</h2>
            <h3>
              <Call />
              </h3>
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
  }
}


export default Home;
