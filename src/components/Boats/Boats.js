import React, { Component } from 'react';
import BoatLink from '../BoatLink/BoatLink';
import SEO from '../SEO';
import { Section, Container, Title, SubTitle } from 'reactbulma';

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
              <h1 className="title is-1 is-spaced">Boats For Rent</h1>
              <div>
                <p>
                  Choose from a variety of boats to rent. Single families do well on the single deck pontoons or ski boat. Large groups can take out our 34' Double Decker for a great day out on the lake
                

                Don't forget about watercraft accessories! We have pull behind tubes, skis, wakeboards, and more!
                </p>
              </div>


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

          </Section>
      </div>

    );
  }
}


export default Boats;
