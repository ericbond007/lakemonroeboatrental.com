import React, { Component } from 'react';
import Rates from '../../components/Rates/Rates';
import { connect } from 'react-redux'

class RatesPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);

  }
  render() {
    return (
      <div>
        <Rates />
      </div>
    );
  }
  }

function mapStateToProps(state, ownProps) {
  return {
    rates: state.rates
  };
}

export default connect(mapStateToProps)(RatesPage);
