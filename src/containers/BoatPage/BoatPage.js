import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Boat from '../../components/Boat/Boat';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SEO from '../../components/SEO';



class BoatPage extends Component {
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
      {this.props.boatname}
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
  let boat = [];
  const boatname = ownProps.location.pathname;
  console.log(boatname);
  if (state.boats.filter(boat => {
    boat.acf.boatname === boatname
  })) {
  return {
    boat: boat
  };
  
  }
}


export default connect(mapStateToProps)(BoatPage);
