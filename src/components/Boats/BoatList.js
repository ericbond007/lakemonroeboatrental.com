import React from 'react';
import BoatCard from './BoatCard';
const BoatList = () => (
	<div>
 <div className="columns is-centered is-multiline" >
                <div className="column is-2">
                  <BoatCard cardImg="doubleDecker" cardHeader="34' Double Decker with Slide" cardText="24 person max capacity" cardLink="doubledecker" imgAlt="Double Decker with Slide" />
                </div>

                <div className="column is-2">
                  <BoatCard cardImg="jetSki" cardHeader="Jet Ski" cardLink="jet-ski" cardText="2 person max          capacity" imgAlt="Jet Ski" />
              </div>

                <div className="column is-2">
                  <BoatCard cardImg="skiBoat" cardHeader="Ski Boat" cardLink="ski-boat" cardText="6 person max       capacity" imgAlt="Ski Boat" />
                </div>

                <div className="column is-2">
                  <BoatCard cardImg="pontoon20" cardHeader="20' Pontoon Boat" cardLink="20-pontoon" cardText="8      person max capacity" imgAlt="20ft Single Deck Pontoon Boat " />
                </div>

                <div className="column is-2">
                  <BoatCard cardImg="pontoon20" cardHeader="24' Pontoon Boat" cardLink="24-pontoon" cardText="10     person max capacity" imgAlt="24ft Single Deck Pontoon Boat" />
                </div>

                <div className="column is-2">
                  <BoatCard cardImg="pontoon20" cardHeader="28' Pontoon Boat" cardLink="28-pontoon" cardText="12     person max capacity" imgAlt="28ft Single Deck Pontoon Boat" />
                </div>


                <div className="column is-2">
                  <BoatCard cardImg="fishing-boat" cardHeader="16ft Fishing Boat" cardLink="fishing-boat"            cardText="2 person max capacity" imgAlt="16ft Fishing Boat" />
              </div>
                <div className="column is-2">
                  <BoatCard cardImg="canoe" cardHeader="Canoes, Kayaks, & Paddleboards" cardLink="non-motorized"     cardText="1-3 people"  imgAlt="Canoes, Kayaks, & Paddleboards" />
              </div>
        </div>

  </div>
);

export default BoatList;
