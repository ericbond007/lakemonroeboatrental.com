import React from 'react';
import PropTypes from 'prop-types';
import { Container, Section } from 'reactbulma'

import BoatList from '../BoatList/BoatList';

const ForRent = (props) => {
  return (
    <Container>
      <Section>
        <h2>Available For Rent</h2>
        <BoatList {...props} />
      </Section>
    </Container>
  );
};

ForRent.propTypes = {
  boats: PropTypes.array.isRequired
}

export default ForRent;

