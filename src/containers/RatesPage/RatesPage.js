import React, { Component } from 'react';
import Rates from '../../components/Rates/Rates';
import Fuel from '../../components/Rates/Fuel';
import Accessories from '../../components/Rates/Accessories';
import { connect } from 'react-redux';

class RatesPage extends Component {

  render() {
    return (
      <div className="is-size-5-mobile" id="rates">
          <Rates {...this.props} />
          <Accessories />
        <Fuel />
      </div>
    );
  }
  }
  function mapStateToProps(state, ownProps) {
  let pontoon = state.boats[4]
  let pontoon24 = state.boats[7]
  let pontoon28 = state.boats[3]
  let doubleD = state.boats[6]
  let jetski = state.boats[5]
  let kayak = state.boats[0]
  let fishingboat = state.boats[1]
  let skiboat = state.boats[2]

  return {
    boats: state.boats,
    pontoon,
    pontoon24,
    pontoon28,
    doubleD,
    jetski,
    kayak,
    fishingboat,
    skiboat
  }
}


export default connect(mapStateToProps)(RatesPage);
