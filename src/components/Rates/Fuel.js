import React from 'react';
import { Section, Container, Title } from 'reactbulma'
import'./Fuel.css'

const Fuel = () => (
  <Section className="content">
        <div className="title">
          Fuel Fees
        </div>
        <p className="is-size-4-desktop">
          Boats are sent out with a full tank of gas and do not require a refill upon return. Fuel fees are calculated by rental period. If you require more fuel, additional fees may apply.
        </p>
    <div className="columns">
      <div className="column is-offset-3 is-5 is-size-4-desktop">
        <div className="fuelRates">

          <div className="fuelRow">
            <div className="fuelLeft">
              Pontoons & Double Decker 1 Hour Rental
            </div>
            <div className="fuelRight">
              $3.00
            </div>
          </div>

          <div className="fuelRow">
            <div className="fuelLeft">
              Pontoons & Double Decker 4 Hour Rental
            </div>
            <div className="fuelRight">
              $12.00
            </div>
          </div>

          <div className="fuelRow">
            <div className="fuelLeft">
              Pontoons & Double Decker 8 Hours or more Rental
            </div>
            <div className="fuelRight">
              $24.00
            </div>
          </div>

          <div className="fuelRow">
            <div className="fuelLeft">
              Ski Boat 1 Hour Rental
            </div>
            <div className="fuelRight">
              $9.00
            </div>
          </div>

          <div className="fuelRow">
            <div className="fuelLeft">
              Jet Ski 1 Hour Rental
            </div>
            <div className="fuelRight">
              $7.00
            </div>
          </div>

          <div className="fuelRow">
            <div className="fuelLeft">
              Fishin Boat Rental
            </div>
            <div className="fuelRight">
              One Tank per Day included
            </div>
          </div>

      </div>
    </div>
      <div className="column is-2 is-hidden-mobile">
      </div>
    </div>
  </Section>
  );

  export default Fuel;
