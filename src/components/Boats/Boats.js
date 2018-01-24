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
              <h1 className="title is-1 is-spaced is-multiline">Boats For Rent</h1>
              <div>
                <p>
                  Choose from a variety of boats to rent. Single families do well on the single deck pontoons or ski boat. Large groups can take out our 34' Double Decker for a great day out on the lake
                

                Don't forget about watercraft accessories! We have pull behind tubes, skis, wakeboards, and more!
                </p>
              </div>
              <div className="columns is-centered" >
                <div classname="column is-3">
                  <BoatCard cardImg="doubleDecker" cardText="this is one large barge!" cardLink="doubledecker" imgAlt="Double Decker with Slide" />
                </div>
                <div classname="column is-3">
                  <BoatCard cardImg="doubleDecker" cardText="this is one large barge!" cardLink="doubledecker" imgAlt="Double Decker with Slide" />
                </div>
                <div classname="column is-3">
                  <BoatCard cardImg="doubleDecker" cardText="this is one large barge!" cardLink="doubledecker" imgAlt="Double Decker with Slide" />
              </div>
                <div classname="column is-3">
                  <BoatCard cardImg="doubleDecker" cardText="this is one large barge!" cardLink="doubledecker" imgAlt="Double Decker with Slide" />
              </div>
                <div classname="column is-3">
                  <BoatCard cardImg="doubleDecker" cardText="this is one large barge!" cardLink="doubledecker" imgAlt="Double Decker with Slide" />
              </div>
                <div classname="column is-3">
                  <BoatCard cardImg="doubleDecker" cardText="this is one large barge!" cardLink="doubledecker" imgAlt="Double Decker with Slide" />
              </div>
        </div>
      </Container>
          </Section>
      </div>

    );
  }
}


export default Boats;
