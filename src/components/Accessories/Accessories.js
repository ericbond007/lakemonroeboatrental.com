import React from 'react';
import { Section } from 'reactbulma';
import Image from '../Image';

const Accessories = () => (
  <div className="accessories is-size-4-desktop">
    <Section className="content">
      <h1 className="boatHeader">Water Accessories</h1>
      <Image imgName="waterAccess" imgAlt="Water Accessories" className="lmbrMap" />
      <div className="boatRates is-size-5-touch">
        <h3 className="regalTitle">Rates</h3>
          <div className="ratesRow">
            <div className="boatLeft">Ski Tube:</div>
            <div className="boatRight">$20 per day / $7hr</div>
          </div>
          <div className="ratesRow">
            <div className="boatLeft">Wakeboard:</div>
            <div className="boatRight">$20 per day / $7hr</div>
          </div>
          <div className="ratesRow">
            <div className="boatLeft">Pair of Skis:</div>
            <div className="boatRight">$20 per day / $7hr</div>
          </div>
          <div className="ratesRow">
            <div className="boatLeft">Knee Board:</div>
            <div className="boatRight">$20 per day / $7hr</div>
          </div>
          <div className="ratesRow">
            <div className="boatLeft">Tube Rope:</div>
            <div className="boatRight">$10 per day</div>
          </div>
          <div className="ratesRow">
            <div className="boatLeft">Ski Rope:</div>
            <div className="boatRight">$10 per day</div>
          </div>
          <div className="ratesRow">
            <div className="boatLeft">Throw Device:</div>
            <div className="boatRight">$3 per day</div>
          </div>
          <div className="ratesRow">
            <div className="boatLeft">Life Preserver:</div>
            <div className="boatRight">$4 per day</div>
          </div>
          <div className="ratesRow">
            <div className="boatLeft">Ski Jacket:</div>
            <div className="boatRight">$5 per day</div>
          </div>
          <div className="ratesRow">
            <div className="boatLeft">Navigation Lights:</div>
            <div className="boatRight">$24 per day</div>
          </div>
          Life preservers are provided at no additional cost with every boat rental. Ski jackets are $5 each.
      </div>
    </Section>
  </div>
);

export default Accessories
