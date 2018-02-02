import React from 'react';
import {  Section } from 'reactbulma'
import BoatList from './BoatList';

const ForRent = () => {
  return (
    <div className="forRent">
      <Section>
        <h2>Available For Rent</h2>
        <BoatList />
      </Section>
  </div>
  );
};


export default ForRent;

