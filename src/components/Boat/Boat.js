import React, { Component } from 'react';
import { Section, Container, Title, SubTitle } from 'reactbulma';

import SEO from '../SEO';


class Boat extends Component {
  constructor(props) {
    super(props)
    this.state = {
      boatname: props.location.state.boatname,
      allboats: props.location.state.boats
      }
    }
  



  componentDidMount(props) {
    window.scrollTo(0, 0);
      let allboats = this.props.location.state.boats;
      let boatname = this.props.location.state.boatname;

    function isCurrentboat(boat) {
      return boat.acf.boatname === boatname;
    }

    let boat = allboats.filter(isCurrentboat);
    let boatacf = boat[0].acf;

    this.setState({ 
      boat: boat,
      boat_length:  boatacf.boat_length_and_type,
      description: boatacf.description,
      max_capacity: boatacf.max_capacity,
      rates_onehour: boatacf.rates_1hour,
      rates_extra_hour: boatacf.rates_extra_hour,
      rates_fourhour: boatacf.rates_4hour,
      rates_eighthour: boatacf.rates_8hour,
      rates_all_day: boatacf.rates_all_day,
      rates_evening: boatacf.rates_evening,
      rates_overnight: boatacf.rates_overnight,
      rates_oneday: boatacf.rates_24_hours,
      rates_threeday: boatacf.rates_3_day,
      rates_weekly: boatacf.rates_weekly,
      deposit: boatacf.deposit,
      boatimage: boatacf.boat_image
    
    });
          
    

    
  }



render() {
  return (
  <Section className="content">
    <Container>
    <h1 className="boatHeader">
      {this.props.location.state.boatname}
    </h1>
    <img src={'/' + this.props.location.state.boatimg} alt={this.props.location.state.boatimgalt} />
    <div>
      <h2>{this.state.max_capacity} Person Max Capacity</h2>
      <p>
      {this.state.description}
      </p>
    </div>
    <div className="boatRates">
      <h3>Rates</h3>
      <p>One Hour: {this.state.rates_onehour}</p>
      <p>Extra Hour: {this.state.rates_extra_hour}</p>
      <p>Four Hours: {this.state.rates_fourhour}</p>
      <p>Eight Hours: {this.state.rates_eighthour}</p>
      {this.state.rates_all_day ? <p>All Day: {this.state.rates_all_day}</p>: null}
      {this.state.rates_overnight ? <p>Overnight: {this.state.rates_overnight}</p>: null}
      {this.state.rates_oneday ? <p>24 Hours: {this.state.rates_oneday}</p>: null}
      {this.state.rates_threeday ? <p>Three Days: {this.state.rates_threeday}</p> : null}
      {this.state.rates_weekly ? <p>Weekly: {this.state.rates_weekly} </p> : null}
      
    </div>
  </Container>
  </Section>
  
  );
}
}

export default Boat;
