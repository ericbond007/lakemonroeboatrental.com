import React from 'react';
import PropTypes from 'prop-types';
import { Container, Section } from 'reactbulma'
import BoatList from './BoatList';

import BoatButton from '../BoatButton/BoatButton';

const ForRent = (props) => {
  return (
    <div className="forRent">
      <Section>
        <h2>Available For Rent</h2>
        <BoatList />
      </Section>
  </div>
  );
};

ForRent.propTypes = {
  boats: PropTypes.array.isRequired
}

export default ForRent;

