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
            <Title>Lake Monroe Boat Rental</Title>
            <SubTitle> Call to Reserve Today!
                812-837-9474
              </SubTitle>
              <h3>Located just south east of Bloomingtion in Paynetown State Recreational Area</h3>
              <div>
              <img src="lmbrMap-min.png" className="boxedShadow lmbrMap" alt="Map of LMBR"/>
            </div>
            <Boats />
          </Container>
        </Section>
      </div>
    );
  }
}

export default Home;
