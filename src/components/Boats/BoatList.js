import React, { Component } from 'react';
import BoatCard from '../Boats/BoatCard';
import ReactGA from 'react-ga';

ReactGA.initialize('UA-101048517-2');

class BoatList extends Component {
  jetSki() {
    ReactGA.event({ 
      category: 'Website Interactions',
      action: 'Viewed Jet Ski Details'
    });
  }

  water() {
    ReactGA.event({ 
      category: 'Website Interactions',
      action: 'Viewed Water Accessories'
    });
  }

  kayak() {
    ReactGA.event({ 
      category: 'Website Interactions',
      action: 'Viewed Canoes & Kayaks'
    });
  }

  render() {
    return (
  <div className="columns is-centered is-multiline" style={{marginRight: '.1rem'}}>
   <div className="column is-half">
       <BoatCard cardImg="doubleDecker" cardHeader="34' Double Decker with Slide" cardText="24 person max capacity" cardLink="boats/doubledecker" imgAlt="Double Decker with Slide" />
                </div>

                <div className="column is-half" onClick={this.jetSki}>
                    <BoatCard cardImg="jetSki" cardHeader="Jet Ski" cardLink="boats/jet-ski" cardText="2 person max          capacity" imgAlt="Jet Ski" />
              </div>

                <div className="column is-half">
                  <BoatCard cardImg="skiBoat" cardHeader="Ski Boat" cardLink="boats/ski-boat" cardText="6 person max       capacity" imgAlt="Ski Boat" />
                </div>

                <div className="column is-half">
                  <BoatCard cardImg="newToon" cardHeader="20' Pontoon Boat" cardLink="boats/20-pontoon" cardText="8      person max capacity" imgAlt="20ft Single Deck Pontoon Boat " />
                </div>


                <div className="column is-half">
                  <BoatCard cardImg="newToon" cardHeader="24' Pontoon Boat" cardLink="boats/24-pontoon" cardText="10     person max capacity" imgAlt="24ft Single Deck Pontoon Boat" />
                </div>

                <div className="column is-half">
                  <BoatCard cardImg="newToon" cardHeader="28' Pontoon Boat" cardLink="boats/28-pontoon" cardText="12     person max capacity" imgAlt="28ft Single Deck Pontoon Boat" />
                </div>
                <div className="column is-half" onClick={this.kayak}>
                  <BoatCard cardImg="canoe" cardHeader="Canoes, Kayaks, & Paddleboards" cardLink="boats/non-motorized"     cardText="1-3 people"  imgAlt="Canoes, Kayaks, & Paddleboards" />
              </div>

                <div className="column is-half">
                  <BoatCard cardImg="fishing-boat" cardHeader="16ft Fishing Boat" cardLink="boats/fishing-boat"            cardText="2 person max capacity" imgAlt="16ft Fishing Boat" />
              </div>
                <div className="column is-half" onClick={this.water}>
                  <BoatCard cardImg="tubeT" cardHeader="Water Accessories" cardLink="accessories"            cardText="Tubes, Skis, and more!" imgAlt="Water Accessories" isAccess="true"/>
                </div>
        </div>
    
    );
  }
  }

export default BoatList;
