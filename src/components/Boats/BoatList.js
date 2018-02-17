import React from 'react';
import BoatCard from '../Boats/BoatCard';
import Flip from 'react-reveal/Flip';


const BoatList = () => (
 <div className="columns is-centered is-multiline" >
   <div className="column is-half">
       <BoatCard cardImg="doubleDecker" cardHeader="34' Double Decker with Slide" cardText="24 person max capacity" cardLink="doubledecker" imgAlt="Double Decker with Slide" />
                </div>

                <div className="column is-half">
                    <BoatCard cardImg="jetSki" cardHeader="Jet Ski" cardLink="jet-ski" cardText="2 person max          capacity" imgAlt="Jet Ski" />
              </div>

                <div className="column is-half">
                  <BoatCard cardImg="skiBoat" cardHeader="Ski Boat" cardLink="ski-boat" cardText="6 person max       capacity" imgAlt="Ski Boat" />
                </div>

                <div className="column is-half">
                  <BoatCard cardImg="pontoon20" cardHeader="20' Pontoon Boat" cardLink="20-pontoon" cardText="8      person max capacity" imgAlt="20ft Single Deck Pontoon Boat " />
                </div>


                <div className="column is-half">
                  <BoatCard cardImg="pontoon20" cardHeader="24' Pontoon Boat" cardLink="24-pontoon" cardText="10     person max capacity" imgAlt="24ft Single Deck Pontoon Boat" />
                </div>

                <div className="column is-half">
                  <BoatCard cardImg="pontoon20" cardHeader="28' Pontoon Boat" cardLink="28-pontoon" cardText="12     person max capacity" imgAlt="28ft Single Deck Pontoon Boat" />
                </div>
                <div className="column is-half">
                  <BoatCard cardImg="canoe" cardHeader="Canoes, Kayaks, & Paddleboards" cardLink="non-motorized"     cardText="1-3 people"  imgAlt="Canoes, Kayaks, & Paddleboards" />
              </div>

                <div className="column is-half">
                  <BoatCard cardImg="fishing-boat" cardHeader="16ft Fishing Boat" cardLink="fishing-boat"            cardText="2 person max capacity" imgAlt="16ft Fishing Boat" />
              </div>
                <div className="column is-half">
                  <BoatCard cardImg="canoe" cardHeader="Water Accessories" cardLink="accessories"            cardText="Tubes, Skis, and more!" imgAlt="Water Accessories" />
                </div>
        </div>
);

export default BoatList;
