import React, { Component } from 'react';
import { Section } from 'reactbulma';
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
      <div id="list-page" className="transition-item">
      <Section className="boatsPage">
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
                <div className="column is-half">
                  <BoatCard cardImg="doubleDecker" cardHeader="34' Double Decker with Slide" cardText="24 person max capacity" cardLink="doubledecker" imgAlt="Double Decker with Slide" />
                </div>

                <div className="column is-half">
                  <BoatCard cardImg="jetSki" cardHeader="Jet Ski" cardLink="jet-ski" cardText="2 person max capacity" imgAlt="Jet Ski" />
              </div>

                <div className="column is-half">
                  <BoatCard cardImg="skiBoat" cardHeader="Ski Boat" cardLink="ski-boat" cardText="6 person max capacity" imgAlt="Ski Boat" />
                </div>

                <div className="column is-half">
                  <BoatCard cardImg="pontoon20" cardHeader="20' Pontoon Boat" cardLink="20-pontoon" cardText="8 person max capacity" imgAlt="20ft Single Deck Pontoon Boat " />
                </div>

                <div className="column is-half">
                  <BoatCard cardImg="pontoon20" cardHeader="24' Pontoon Boat" cardLink="24-pontoon" cardText="10 person max capacity" imgAlt="24ft Single Deck Pontoon Boat" />
                </div>

                <div className="column is-half">
                  <BoatCard cardImg="pontoon20" cardHeader="28' Pontoon Boat" cardLink="28-pontoon" cardText="12 person max capacity" imgAlt="28ft Single Deck Pontoon Boat" />
                </div>


                <div className="column is-half">
                  <BoatCard cardImg="fishing-boat" cardHeader="16ft Fishing Boat" cardLink="fishing-boat" cardText="2 person max capacity" imgAlt="16ft Fishing Boat" />
              </div>
                <div className="column is-half">
                  <BoatCard cardImg="canoe" cardHeader="Canoes, Kayaks, & Paddleboards" cardLink="non-motorized" cardText="1-3 people"  imgAlt="Canoes, Kayaks, & Paddleboards" />
              </div>
        </div>
          </Section>
      </div>

    );
  }
}


export default Boats;
