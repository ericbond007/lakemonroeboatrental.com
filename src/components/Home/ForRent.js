import React from 'react';
import {  Section } from 'reactbulma'
import BoatList from '../Boats/BoatList';
import { Zoom, Roll } from 'react-reveal';

const ForRent = () => {
  return (
    <div className="forRent">
      <Section>
        <Zoom fraction={.15}>
          <h2 className="is-spaced">Available For Rent</h2>
        </Zoom>
        <Roll left cascade fraction={.1}>
          <BoatList />
        </Roll>
      </Section>
  </div>
  );
};


export default ForRent;

