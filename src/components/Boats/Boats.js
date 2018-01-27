import React, { Component } from 'react';
import BoatLink from '../BoatLink/BoatLink';
import SEO from '../SEO';
import { Section, Container, Title, SubTitle } from 'reactbulma';
import Image from '../Image';
import BoatCard from './BoatCard';

import './Boats.css';

class Boats extends Component {
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
      <Section className="boatsPage">
        <Container>
              <h1 className="title is-1 is-spaced">Boats For Rent</h1>
              <div>
                <p className="leftAlign">
                  Choose from a variety of boats to rent. Single families do well on the single deck pontoons or ski boat. Large groups can take out our 34' Double Decker for a great day out on the lake
                

                Don't forget about watercraft accessories! We have pull behind tubes, skis, wakeboards, and more!
                </p>
                <p className="withSpace">
                  Click the images below to see more info about the boat!
                </p>
              </div>
              <div className="columns is-centered is-multiline" >
                <div className="column is-3">
                  <BoatCard cardImg="doubleDecker" cardText="34' Double Decker with Slide" cardLink="doubledecker" imgAlt="Double Decker with Slide" />
                </div>

                <div className="column is-3">
                  <BoatCard cardImg="pontoon20" cardText="20' Pontoon Boat" cardLink="20-pontoon" imgAlt="20ft Single Deck Pontoon Boat " />
                </div>

                <div className="column is-3">
                  <BoatCard cardImg="pontoon20" cardText="24' Pontoon Boat" cardLink="24-pontoon" imgAlt="24ft Single Deck Pontoon Boat" />
                </div>

                <div className="column is-3">
                  <BoatCard cardImg="pontoon20" cardText="28' Pontoon Boat" cardLink="28-pontoon" imgAlt="28ft Single Deck Pontoon Boat" />
                </div>

                <div className="column is-3">
                  <BoatCard cardImg="skiBoat" cardText="Ski Boat" cardLink="ski-boat" imgAlt="Ski Boat" />
                </div>

                <div className="column is-3">
                  <BoatCard cardImg="jetSki" cardText="Jet Ski" cardLink="jet-ski" imgAlt="Jet Ski" />
              </div>
                <div className="column is-3">
                  <BoatCard cardImg="fishing-boat" cardText="16ft Fishing Boat" cardLink="fishing-boat" imgAlt="16ft Fishing Boat" />
              </div>
                <div className="column is-3">
                  <BoatCard cardImg="canoe" cardText="Canoes, Kayaks, & Paddleboards" cardLink="non-motorized" imgAlt="Canoes, Kayaks, & Paddleboards" />
              </div>
        </div>
      </Container>
          </Section>
      </div>

    );
  }
}


export default Boats;
