import React, { Component } from 'react';
import Rates from '../../components/Rates/Rates';
import { connect } from 'react-redux'
import SEO from '../../components/SEO';

class RatesPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 800);

  }
  render() {
    return (
      <div>
        <SEO
          title="Rates | Lake Monroe Boat Rental"
          description="Rates page"
          path="/rates"
        />
        <Rates />
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
