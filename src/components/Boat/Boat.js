import React from 'react';
import { Section } from 'reactbulma';
import Image from './Image';
import Reserve from '../Reserve';
import './Boat.css';
import Slide from 'react-reveal/Slide';

const Boat = ({boat}) => {
  if (boat[0] !== undefined) {
  return (
    <div className="boat is-size-4-desktop">
      <Section style={{paddingBottom: '-3rem'}}>
        <h1 className="boatHeader is-size-1 is-centered">
          {boat[0].acf.boat_length_and_type}
        </h1>
          <Image imgName={boat[0].acf.boat_image} imgAlt={boat[0].acf.boat_image_alt} divClassName="boatImgdiv" className="singleBoatImg"/>
        <div>
          <h2 className="is-centered is-size-3" style={{ paddingBottom: '2rem' }}> {boat[0].acf.max_capacity} Person Max Capacity</h2>
          <p style={{textIndent: '1rem' }} className="is-size-4-touch">
            {boat[0].acf.description}
          </p>
        </div>
        <div className="boatRates is-size-4-touch">
          <h3 className="regalTitle is-size-1">Rates</h3>
          <div className="ratesRow">
            <Slide left fraction={.1} duration={500}>
              <div className="boatLeft">One Hour:</div>
            </Slide>
            <Slide right fraction={.1} duration={500}>
              <div className="boatRight"> ${boat[0].acf.rates_onehour}</div>
            </Slide>
          </div>
          <div className="ratesRow">
            <Slide left fraction={.1} duration={500}>
            <div className="boatLeft">Extra Hour:</div>
            </Slide>
            <Slide right fraction={.1} duration={500}>
            <div className="boatRight">${boat[0].acf.rates_extra_hour}</div>
            </Slide>
          </div>
          <div className="ratesRow">
            <Slide left fraction={.1} duration={500}>
            <div className="boatLeft">Four Hours:</div>
            </Slide>
            <Slide right fraction={.1} duration={500}>
            <div className="boatRight">${boat[0].acf.rates_fourhour}</div>
            </Slide>
          </div>
          <div className="ratesRow">
            <Slide left fraction={.1} duration={500}>
            <div className="boatLeft">Eight Hours:</div>
            </Slide>
            <Slide right fraction={.1} duration={500}>
            <div className="boatRight">${boat[0].acf.rates_eighthour}</div>
            </Slide>
          </div>
          {boat[0].acf.rates_all_day ? 
          <div className="ratesRow">
            <Slide left fraction={.1} duration={500}>
            <div className="boatLeft">All Day:</div>
            </Slide>
            <Slide right fraction={.1} duration={500}>
            <div className="boatRight">${boat[0].acf.rates_all_day}</div>
            </Slide>
          </div>: null}
          {boat[0].acf.rates_evening ? 
          <div className="ratesRow">
            <Slide left fraction={.1} duration={500}>
            <div className="boatLeft">Evening:</div>
            </Slide>
            <Slide right fraction={.1} duration={500}>
            <div className="boatRight">${boat[0].acf.rates_evening}</div>
            </Slide>
          </div>: null}
          {boat[0].acf.rates_overnight ? 
          <div className="ratesRow">
            <Slide left fraction={.1} duration={500}>
            <div className="boatLeft">Overnight:</div>
            </Slide>
            <Slide right fraction={.1} duration={500}>
            <div className="boatRight">${boat[0].acf.rates_overnight}</div>
            </Slide>
          </div>: null}
          {boat[0].acf.rates_oneday ? 
          <div className="ratesRow">
            <Slide left fraction={.1} duration={500}>
            <div className="boatLeft">24 Hours:</div>
            </Slide>
            <Slide right fraction={.1} duration={500}>
            <div className="boatRight">${boat[0].acf.rates_oneday}</div>
            </Slide>
          </div>: null}
          {boat[0].acf.rates_threeday ? 
          <div className="ratesRow">
            <Slide left fraction={.1} duration={500}>
            <div className="boatLeft">Three Days:</div>
            </Slide>
            <Slide right fraction={.1} duration={500}>
            <div className="boatRight">${boat[0].acf.rates_threeday}</div>
            </Slide>
          </div> : null}
          {boat[0].acf.rates_weekly ? 
          <div className="ratesRow">
            <Slide left fraction={.1} duration={500}>
            <div className="boatLeft">Weekly:</div>
            </Slide>
            <Slide right fraction={.1} duration={500}>
            <div className="boatRight">${boat[0].acf.rates_weekly} </div>
            </Slide>
          </div>: null}
          <div className="ratesRow">
            <Slide left fraction={.1} duration={500}>
            <div className="boatLeft">Deposit:</div>
            </Slide>
            <Slide right fraction={.1} duration={500}>
            <div className="boatRight">${boat[0].acf.deposit}</div>
            </Slide>
          </div>
          {boat[0].acf.earlybirdhour ?
          <div>
            <h3 className="regalTitle is-size-1">Early Bird Special</h3>
            <p className="is-indent">
              {boat[0].acf.blurb}
            </p>
          <div className="ratesRow">
            <Slide left fraction={.1} duration={500}>
            <div className="boatLeft">One Hour:</div>
            </Slide>
            <Slide right fraction={.1} duration={500}>
            <div className="boatRight">${boat[0].acf.earlybirdhour}</div>
            </Slide>
          </div>
          <div className="ratesRow">
            <Slide left fraction={.1} duration={500}>
            <div className="boatLeft">Four Hours:</div>
            </Slide>
            <Slide right fraction={.1} duration={500}>
            <div className="boatRight">${boat[0].acf.earlybirdfourhours}</div>
            </Slide>
          </div>
        </div>
          : null}
          <Reserve style={{marginBottom: '0vh'}}/>
        </div>
      </Section>
    </div>
    );
    } else {
      return null;
    }
    };

export default Boat;
