import React, { Component } from 'react';
import { Section, Container, Title, SubTitle } from 'reactbulma';

const Boat = ({boat}) => (
    <Section className="content">
      <Container>
      <h1 className="boatHeader">
      </h1>
      <div>
        <h2>Person Max Capacity</h2>
        <p>
          {boat[0].acf.boatname}
        </p>
      </div>
      <div className="boatRates">
        <h3>Rates</h3>
      </div>
    </Container>
    </Section>

)


export default Boat;
