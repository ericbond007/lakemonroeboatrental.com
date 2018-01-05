import React, { Component } from 'react';
import Rates from '../../components/Rates/Rates';

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

export default RatesPage;
