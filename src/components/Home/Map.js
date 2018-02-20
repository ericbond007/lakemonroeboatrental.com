import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import Image from '../Image';
const Map = () => (
  <div className="map">
    <h3 className="is-indent is-size-4">
      Just South of Bloomington!
    </h3>
        <a rel="noopener noreferrer" target="_blank" href="https://www.google.com/maps/place/Lake+Monroe+Boat+Rental+Inc/@39.0817314,-86.4368141,17z/data=!3m1!4b1!4m5!3m4!1s0x886c654522e1fb7f:0x7e1299e6fcb7313!8m2!3d39.0817314!4d-86.4346254">
          <Image imgName="map" imgAlt="Map of Lake Monroe Boat Rental" className="lmbrMap" />
        </a>
        <p className="has-text-centered">
          <Link to="/contact">Click here for directions!</Link>
        </p>
        <h4 className="is-indent is-size-5-touch">
          Lake Monroe Boat Rental is located just six miles south east of Bloomingtion in Paynetown State Recreational Area
        </h4>
  </div>
);

export default Map;
