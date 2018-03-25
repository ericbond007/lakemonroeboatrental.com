import React, { Component } from 'react';
import Rates from '../../components/Rates/Rates';
import Fuel from '../../components/Rates/Fuel';
import JetSki from '../../components/Rates/JetSki';
import Accessories from '../../components/Rates/Accessories';
import { connect } from 'react-redux';
import SEO from '../../components/SEO';
import NavBar from '../../components/NavBar/NavBar';

class RatesPage extends Component {

  render() {
    return (
      <div>
        <NavBar />
      <div className="is-size-5-mobile" id="rates">
        <SEO
          title="Rates | Lake Monroe Boat Rental"
          path="/rates"
          description="Rental rates for boats at Lake Monroe Boat Rental. Call 812-837-9909 to reserve today."
        />
          <Rates {...this.props} />
          <JetSki {...this.props} />
          <Accessories />
        <Fuel />
      </div>
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
