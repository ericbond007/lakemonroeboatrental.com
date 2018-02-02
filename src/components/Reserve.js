import React from 'react';
import Call from './Call.js';
import { Section, Button } from 'reactbulma';

const Reserve = () => (
  <div className="reserve is-size-4-desktop is-centered">
    <Section>
      <a href="tel:+1-812-837-9909">
        <Button primary large>

      <h2>
        Call to Reserve Today!
      </h2>
    </Button>
  </a>
    <h3>
      <Call className="homeNumber" />
    </h3>
</Section>
</div>
);

export default Reserve;
