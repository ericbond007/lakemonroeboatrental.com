import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import HomeBoatLink from '../HomeBoatLink/HomeBoatLink';
import { Button, Box } from 'reactbulma'

class Boats extends Component {
  constructor(props) {
    super(props);

    this.state= {
      boats: []
    }
  }

   componentDidMount() {
    let dataURL = "https://balcarth.com/wordpress/wp-json/wp/v2/boats?_embed";
    fetch(dataURL)
      .then(res => res.json())
      .then(res => {
        this.setState({
          boats: res
        })
      })
  }

  render() {
    return (
      <div className="boatButtons">
        	<h3>Available For Rent</h3>                         
          <HomeBoatLink boatname="Double Decker" boatlink="doubledecker" buttonText="Double Decker Pontoons" boatimg="doubleDecker.jpg" {...this.state} />
          <HomeBoatLink boatname="20' Pontoon" boatlink="20-pontoon" buttonText="Pontoon Boats" {...this.state} />
          <HomeBoatLink boatname="jet-ski" boatlink="jet-ski" buttonText="Jet Skis" {...this.state} />
          <HomeBoatLink boatname="ski-boat" boatlink="ski-boat" buttonText="Ski Boats" {...this.state} />
        </div>
    );
  }
}

export default Boats;
