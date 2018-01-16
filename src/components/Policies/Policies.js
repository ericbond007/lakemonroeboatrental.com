import React, { Component } from 'react';
import SEO from '../SEO';
import { Section, Container, Title, SubTitle } from 'reactbulma';
import './Policies.css';

class Policies extends Component {
  constructor() {
    super();
    this.state = {
      policies: []
    }
  }
  
  componentDidMount() {
    let policies = "https://balcarth.com/wordpress/wp-json/wp/v2/br_policies?_embed";
    fetch (policies)
      .then(result => result.json())
      .then(result => {
        this.setState ({
          policies: result
        })
      })
  }

  render() {
    let allpols = this.state.policies.map((policy, key) => (
      <p key={key}>{policy}</p>
    ));
    

    return (
      <div>
        <SEO
          title="Policies | Lake Monroe Boat Rental"
          description="Located in Paynetown SRA"
          path="/"
        />
      
      <Section className="policies">
        <Container>
          <Title> Policies</Title>
          <div>
          </div>
        </Container>
      </Section>

      </div>

    );
  }
}

export default Policies;
