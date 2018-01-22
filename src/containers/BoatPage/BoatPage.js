import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Boat from '../../components/Boat/Boat';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SEO from '../../components/SEO';



class BoatPage extends Component {
  constructor(props) {
    super();
    this.state = {
      ...props
    }
  }
  componentDidMount() {
    window.scrollTo(0, 0);

  }

  render() {
    return (
      <div>
      <SEO
        title="Boat | Lake Monroe Boat Rental"
        description="We have a wide variety of watercraft available for rent. Choose from poontons, double deckers, and more"
        path="/boats/boatname"
      />
      <div className="container">
        <div className="section">
          <p>Boat info goes here</p>
        </div>
      </div>
      </div>
    );
  }
}

BoatPage.propTypes = {
  boat: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  const boatname = ownProps.location.pathname.replace(/\/boats\//, '');
  const boat = state.boats.filter(boat => boat.acf.boatname === boatname);
  const boatarray = boat[0];
  const boatacf = boatarray;
  const boat_length = boatarray.acf.boat_length_and_type;
  return {
    boatacf: boatacf,
    boatarray: boatarray,
    boatname: boatname,
    boat_length: boat_length
  };
}


export default connect(mapStateToProps)(BoatPage);
