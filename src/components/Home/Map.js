import React from 'react';
import { Section, Container } from 'reactbulma';
import Image from '../Image';

const Map = () => (
  <div className="map">
    <Section>
      <Container>
        <h4>
          Located just south east of Bloomingtion in Paynetown State Recreational Area
        </h4>
        <Image imgName="map" imgAlt="Map of Lake Monroe Boat Rental" className="boxedShadow lmbrMap" />
    </Container>
  </Section>
  </div>
);

export default Map;
