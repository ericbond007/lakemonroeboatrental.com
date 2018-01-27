import React, { Component } from 'react';
import SEO from '../SEO';
import { Section, Container, Title, SubTitle } from 'reactbulma';

import './About.css';

class About extends Component {
  constructor() {
    super();
    this.state = {
      boats: []
    }
  }
  
  componentDidMount(prevProps) {
  }

  render() {
    return (
      <div>
        <SEO
          title="About | Lake Monroe Boat Rental"
          description="Located in Paynetown SRA"
          path="/"
        />
      
      <Section className="about">
        <Container>
              <h1 className="landingTitle">About Us</h1>
        </Container>
        </Section>
      </div>

    );
  }
}

export default About;
