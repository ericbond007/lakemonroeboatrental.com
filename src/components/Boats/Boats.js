import React, { Component } from 'react';
import { Section } from 'reactbulma';
import BoatCard from './BoatCard';
import BoatList from './BoatList';

import './Boats.css';

class Boats extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boats: []
    }
  }
  
  componentDidMount() {
  }

  render() {
    return (
      <div id="list-page" className="transition-item">
      <Section className="boatsPage">
              <h1 className="title is-1">Boats For Rent</h1>
              <div>
                <p className="leftAlign">
                  Choose from a variety of boats to rent. Single families do well on the single deck pontoons or ski boat. Large groups can take out our 34' Double Decker for a great day out on the lake
                

                Don't forget about watercraft accessories! We have pull behind tubes, skis, wakeboards, and more!
                </p>
                <p className="withSpace">
                  Click the images below to see more info about the boat!
                </p>
              </div>
              <BoatList />
          </Section>
      </div>

    );
  }
}


export default Boats;
