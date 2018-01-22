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
      ...props,
      boat: {}
    }
  }
  componentDidMount() {
    window.scrollTo(0, 0);

  }

  render() {
    console.log(this.props.boat);
    return (
      <div>
      <SEO
        title="Boat | Lake Monroe Boat Rental"
        description="We have a wide variety of watercraft available for rent. Choose from poontons, double deckers, and more"
        path="/boats/boatname"
      />
      {(this.props.boat) && 
      <Boat boat={this.props.boat} />
      }
      </div>
    );
  }
}

BoatPage.propTypes = {
  boat: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  let boat = {boatname: '', max_capacity: ''};
  const boats = state.boats;
  let boatname = ownProps.location.pathname.replace(/\/boats\//, '');
  if (state.boats) {
    boat = state.boats.filter(boat => boat.acf.boatname === boatname);
  }
  return {
    boat: boat
  };

}


export default connect(mapStateToProps)(BoatPage);
