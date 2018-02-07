import React from 'react';
import { Section } from 'reactbulma';
import Image from '../Image';
import Reserve from '../Reserve';
import './Boat.css';

const Boat = ({boat}) => {
  if (boat[0] !== undefined) {
  return (
    <div className="boat is-size-4-desktop">
      <Section className="">
        <h1 className="boatHeader is-size-1 is-centered">
          {boat[0].acf.boat_length_and_type}
        </h1>
        <div style={{ textAlign: 'center'}}>
          <Image imgName={boat[0].acf.boat_image} imgAlt={boat[0].acf.boat_image_alt} className="singleBoatImg"/>
        </div>
        <div>
          <h2 className="is-centered is-size-4" style={{ paddingBottom: '2rem' }}> {boat[0].acf.max_capacity} Person Max Capacity</h2>
          <p style={{textIndent: '1rem' }}>
            {boat[0].acf.description}
          </p>
        </div>
        <div className="boatRates is-size-5-touch">
          <h3 className="regalTitle is-size-3">Rates</h3>
          <div className="ratesRow">
            <div className="boatLeft">One Hour:</div>
            <div className="boatRight"> ${boat[0].acf.rates_onehour}</div>
          </div>
          <div className="ratesRow">
            <div className="boatLeft">Extra Hour:</div>
            <div className="boatRight">${boat[0].acf.rates_extra_hour}</div>
          </div>
          <div className="ratesRow">
            <div className="boatLeft">Four Hours:</div>
            <div className="boatRight">${boat[0].acf.rates_fourhour}</div>
          </div>
          <div className="ratesRow">
            <div className="boatLeft">Eight Hours:</div>
            <div className="boatRight">${boat[0].acf.rates_eighthour}</div>
          </div>
          {boat[0].acf.rates_all_day ? 
          <div className="ratesRow">
            <div className="boatLeft">All Day:</div>
            <div className="boatRight">${boat[0].acf.rates_all_day}</div>
          </div>: null}
          {boat[0].acf.rates_overnight ? 
          <div className="ratesRow">
            <div className="boatLeft">Overnight:</div>
            <div className="boatRight">${boat[0].acf.rates_overnight}</div>
          </div>: null}
          {boat[0].acf.rates_oneday ? 
          <div className="ratesRow">
            <div className="boatLeft">24 Hours:</div>
            <div className="boatRight">${boat[0].acf.rates_oneday}</div>
          </div>: null}
          {boat[0].acf.rates_threeday ? 
          <div className="ratesRow">
            <div className="boatLeft">Three Days:</div>
            <div className="boatRight">${boat[0].acf.rates_threeday}</div>
          </div> : null}
          {boat[0].acf.rates_weekly ? 
          <div className="ratesRow">
            <div className="boatLeft">Weekly:</div>
            <div className="boatRight">${boat[0].acf.rates_weekly} </div>
          </div>: null}
          <div className="ratesRow">
            <div className="boatLeft">Deposit:</div>
            <div className="boatRight">${boat[0].acf.deposit}</div>
          </div>
          <Reserve />
        </div>
      </Section>
    </div>
    );
    } else {
      return null;
    }
    };

export default Boat;
