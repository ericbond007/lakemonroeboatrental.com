import React, { Component } from 'react';
import AnimatedWrapper from '../../AnimatedWrapper';
import BoatLink from '../BoatLink/BoatLink';
import SEO from '../SEO';
import { Section, Container, Title, SubTitle } from 'reactbulma';

import './Boats.css';

class BoatsWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boats: []
    }
  }
  
  componentDidMount() {
  }

  render() {
    return (
      <div>
        <SEO
          title="Boats | Lake Monroe Boat Rental"
          description="Located in Paynetown SRA"
          path="/"
        />
      
      <Section className="boatsPage">
        <Container>
              <h1 className="title is-1 is-spaced">Boats For Rent</h1>
              <BoatLink boatname="Double Decker" imgName="doubleDecker" imgAlt="Double Decker" boatlink="doubledecker">{this.props.children}</BoatLink>
              <BoatLink boatname="20-pontoon" imgName="pontoon" imgAlt="20' Pontoon" boatlink="20-pontoon">{this.props.children}</BoatLink>
              <BoatLink boatname="ski-boat" imgName="skiBoat" imgAlt="Ski Boat" boatlink="ski-boat"/>
              <h2>
               Jet Skis 
              </h2>
              <img src="jetSki.jpg"  alt="Jet Ski"/>
              <h2>
                Canoes & Kayaks
              </h2>
              <img src="doubleDecker.jpg"  alt="Double Decker"/>
              <h2>
               Fishing Boats 
              </h2>
              <img src="doubleDecker.jpg"  alt="Double Decker"/>
              <h2>
                Water Accessories
              </h2>
              <img src="doubleDecker.jpg"  alt="Double Decker"/>

            </Container>
          </Section>
        </div>

    );
  }
}

const Boats = AnimatedWrapper(BoatsWrapper);

export default Boats;
