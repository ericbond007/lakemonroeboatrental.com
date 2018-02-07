import React from 'react';
import Call from './Call.js';
import Media from 'react-media';
import { Section, Button } from 'reactbulma';

const Reserve = () => (
  <div className="reserve is-size-1-desktop is-centered">
    <Section>
      <Media query="(max-width: 767px)">
        {matches => matches ? (
      <a href="tel:+1-812-837-9909">
        <Button primary large className="ripple is-size-1">

      <h2 className="is-size-1">
        Call to Reserve Today!
      </h2>
    </Button>
  </a>
        
        ):(
        <Button primary large className="ripple">

      <h2>
        Call to Reserve Today!
      </h2>
    </Button>

        )}
      </Media>
    <h3>
      <Call className="homeNumber" />
    </h3>
</Section>
</div>
);

export default Reserve;
