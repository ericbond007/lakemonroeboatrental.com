import React, { Component } from 'react';
import { Section, Container, Title, SubTitle } from 'reactbulma';
import Sidebar from '../Sidebar/Sidebar';
import Image from '../Image';

const Boat = ({boat}) => {
  if (boat[0] !== undefined) {
  return (
    <div className="boat">
      <Section className="content">
        <h1 className="boatHeader">
          {boat[0].acf.boat_length_and_type}
        </h1>
        <Image imgName={boat[0].acf.boat_image} imgAlt={boat[0].acf.boat_image_alt} />
        <div>
          <h2> {boat[0].acf.max_capacity} Person Max Capacity</h2>
          <p>
            {boat[0].acf.description}
          </p>
        </div>
        <div className="boatRates">
          <h3>Rates</h3>
           <p>One Hour: {boat[0].acf.rates_onehour}</p>
      <p>Extra Hour: {boat[0].acf.rates_extra_hour}</p>
      <p>Four Hours: {boat[0].acf.rates_fourhour}</p>
      <p>Eight Hours: {boat[0].acf.rates_eighthour}</p>
      {boat[0].acf.rates_all_day ? <p>All Day: {boat[0].acf.rates_all_day}</p>: null}
      {boat[0].acf.rates_overnight ? <p>Overnight: {boat[0].acf.rates_overnight}</p>: null}
      {boat[0].acf.rates_oneday ? <p>24 Hours: {boat[0].acf.rates_oneday}</p>: null}
      {boat[0].acf.rates_threeday ? <p>Three Days: {boat[0].acf.rates_threeday}</p> : null}
      {boat[0].acf.rates_weekly ? <p>Weekly: {boat[0].acf.rates_weekly} </p> : null}
        </div>
      </Section>
    </div>
    );
    } else {
      return null;
    }
    };

export default Boat;
