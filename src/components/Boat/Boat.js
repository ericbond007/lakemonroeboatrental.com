import React, { Component } from 'react';
import SEO from '../SEO';


class Boat extends Component {
  constructor() {
    super();
    this.state = {
      boats: []
    }
  }
  
  componentDidMount(prevProps) {
  }


  render() {
    return (
      <div>
        <SEO
          title="Use REST API to display boat name | Lake Monroe Boat Rental"
          description="Located in Paynetown SRA"
          path="/"
        />
            <div className="content">  
              <h1 className="landingHeader">Use REST to Show Boat Name</h1>
              <h2>
                Double Decker w/ slide
              </h2>
              <img src="doubleDecker.jpg" alt="Double Decker"/>
              <h3>Rates</h3>
              <p>1 Hour: $65</p>
              <p>Extra Hour: $40</p>
            </div>
                
              
      </div>

    );
  }
}

export default Boat;
