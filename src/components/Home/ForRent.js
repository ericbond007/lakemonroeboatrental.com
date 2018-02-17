import React from 'react';
import {  Section } from 'reactbulma'
import BoatList from '../Boats/BoatList';
import { Zoom, Roll } from 'react-reveal';

const ForRent = () => {
  return (
    <div className="forRent">
      <Section>
        <Zoom>
          <h2 className="is-spaced">Available For Rent</h2>
        </Zoom>
        <Roll left cascade>
          <BoatList />
        </Roll>
      </Section>
  </div>
  );
};


export default ForRent;

