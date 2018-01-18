import React, { Component } from 'react';
import SEO from '../SEO';
import Boats from './Boats';
import { Section, Container, Title, SubTitle } from 'reactbulma';

import './Home.css';

class Home extends Component {
  

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
            <h1 className="title is-1 is-spaced">Lake Monroe Boat Rental</h1>
            <h2 className="subtitle is-3"> Call to Reserve Today!</h2>
            <h3>
                812-837-9474
              </h3>
              <h3>Located just south east of Bloomingtion in Paynetown State Recreational Area</h3>
              <div>
              <img src="lmbrMap-min.png" className="boxedShadow lmbrMap" alt="Map of LMBR"/>
            </div>
          </Container>
        </Section>
      </div>
    );
  }
}


export default Home;
