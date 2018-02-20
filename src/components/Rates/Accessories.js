import React from 'react';
import { Section } from 'reactbulma';

const Accessories = () => (
    <Section className="content lineHeight">
      <div className="title">
        Water Accessories
      </div>
      <div className="columns">
        <div className="column is-offset-one-quarter is-half is-size-4-desktop">

      <div className="fuelRates">
          <div className="fuelRow">
            <div className="fuelLeft">Ski Tube:</div>
            <div className="fuelRight">$20 per day / $7hr</div>
          </div>
          <div className="fuelRow">
            <div className="fuelLeft">Wakeboard:</div>
            <div className="fuelRight">$20 per day / $7hr</div>
          </div>
          <div className="fuelRow">
            <div className="fuelLeft">Pair of Skis:</div>
            <div className="fuelRight">$20 per day / $7hr</div>
          </div>
          <div className="fuelRow">
            <div className="fuelLeft">Knee Board:</div>
            <div className="fuelRight">$20 per day / $7hr</div>
          </div>
          <div className="fuelRow">
            <div className="fuelLeft">Tube Rope:</div>
            <div className="fuelRight">$10 per day</div>
          </div>
          <div className="fuelRow">
            <div className="fuelLeft">Ski Rope:</div>
            <div className="fuelRight">$10 per day</div>
          </div>
          <div className="fuelRow">
            <div className="fuelLeft">Throw Device:</div>
            <div className="fuelRight">$3 per day</div>
          </div>
          <div className="fuelRow">
            <div className="fuelLeft">Life Preserver:</div>
            <div className="fuelRight">$4 per day</div>
          </div>
          <div className="fuelRow">
            <div className="fuelLeft">Ski Jacket:</div>
            <div className="fuelRight">$5 per day</div>
          </div>
          <div className="fuelRow">
            <div className="fuelLeft">Navigation Lights:</div>
            <div className="fuelRight">$24 per day</div>
          </div>
          Life preservers are provided at no additional cost with every boat rental. Ski jackets are $5 each.
        </div>
      </div>
      <div className="column is-2 is-hidden-mobile">
      </div>
      </div>
    </Section>
);

export default Accessories
