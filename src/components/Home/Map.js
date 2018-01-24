import React from 'react';
import { Section, Container, Message } from 'reactbulma';
import Image from '../Image';

const Map = () => (
  <div className="map">
    <Section>
        <Message primary>
          <Message.Header>
        <h4>
          Located just south east of Bloomingtion in Paynetown State Recreational Area
        </h4>
      </Message.Header>
      <Message.Body>
        <Image imgName="map" imgAlt="Map of Lake Monroe Boat Rental" className="boxedShadow lmbrMap" />
      </Message.Body>
    </Message>
  </Section>
  </div>
);

export default Map;
