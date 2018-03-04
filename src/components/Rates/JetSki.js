import React from 'react';
import { Section } from 'reactbulma';
import'./Fuel.css';

const JetSki = ({boats}) => {
  if (boats[5] !== undefined) {
    return (
  <Section className="content">
        <div className="title">
          Jet Ski Early Bird Special
        </div>
    <div className="columns">
      <div className="column is-offset-one-quarter is-half is-size-4-desktop">
        <p className="is-size-4-desktop">
          Rent and return by 11:30AM to receive the early bird special!
        </p>
        <div className="fuelRates">

          <div className="fuelRow">
            <div className="fuelLeft">
              One Hour:
            </div>
            <div className="fuelRight">
              ${boats[5].acf.earlybirdhour}
            </div>
          </div>

          <div className="fuelRow">
            <div className="fuelLeft">
              Four Hours:
            </div>
            <div className="fuelRight">
              ${boats[5].acf.earlybirdfourhours}
            </div>
          </div>

      </div>
    </div>
      <div className="column is-2 is-hidden-mobile">
      </div>
    </div>
  </Section>
  ); } else {
    return null;
  }
  };

 export default JetSki;
