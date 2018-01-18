import React, { Component } from 'react';
import SEO from '../SEO';
import { Section, Container, Title, SubTitle } from 'reactbulma';

import './Contact.css';

class Contact extends Component {
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
          title="Contact | Lake Monroe Boat Rental"
          description="Located in Paynetown SRA"
          path="/"
        />
      
      <Section className="content">
        <Container>
              <h1 className="landingTitle">Contact Us</h1>
        </Container>
        </Section>
      </div>

    );
  }
}

export default Contact;
