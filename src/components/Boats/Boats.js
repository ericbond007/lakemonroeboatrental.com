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
              <BoatLink boatname="Double Decker" boatimg="doubleDecker.jpg" boatimgalt="Double Decker" boatlink="doubledecker"  {...this.state} />
              <BoatLink boatname="20-pontoon" boatimg="doubleDecker.jpg" boatimgalt="20' Pontoon" boatlink="20-pontoon"  {...this.state} />
              <BoatLink boatname="ski-boat" boatimg="skiBoat.jpg" boatimgalt="SKi Boat" boatlink="ski-boat"  {...this.state} />
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
