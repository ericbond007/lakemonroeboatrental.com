import React from 'react';
import PropTypes from 'prop-types';
import { Container, Section } from 'reactbulma'

import BoatButton from '../BoatButton/BoatButton';

const ForRent = (props) => {
  return (
    <div className="forRent">
    <Container>
      <Section>
        <h2>Available For Rent</h2>
        <div className="boatButtons">
          <BoatButton boatName="Double Decker" boatname="doubledecker" />
          <BoatButton boatName="Pontoon Boats" boatname="pontoons"/>
          <BoatButton boatName="Jet Skis" boatname="jet-ski" />
          <BoatButton boatName="Ski Boats" boatname="ski-boat" />
          <BoatButton boatName="Fishing Boats" boatname="fishing-boats" />
          <BoatButton boatName="Non-Motorized" boatname="non-motorized" />
        </div>
      </Section>
    </Container>
  </div>
  );
};

ForRent.propTypes = {
  boats: PropTypes.array.isRequired
}

export default ForRent;

