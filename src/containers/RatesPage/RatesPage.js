import React, { Component } from 'react';
import Rates from '../../components/Rates/Rates';
import Fuel from '../../components/Rates/Fuel';
import { connect } from 'react-redux'
import SEO from '../../components/SEO';

class RatesPage extends Component {
  componentDidMount() {
  }
  render() {
    return (
      <div className="is-size-5-mobile">
        <SEO
          title="Rates | Lake Monroe Boat Rental"
          description="Rates page"
          path="/rates"
        />
        <Rates />
        <Fuel />
      </div>
    );
  }
  }

function mapStateToProps(state, ownProps) {
  return {
    rates: state.rates,
    fuel: state.fuel_rates
  };
}

export default connect(mapStateToProps)(RatesPage);
