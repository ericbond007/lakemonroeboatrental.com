import React, { Component } from 'react';
import Rates from '../../components/Rates/Rates';
import Fuel from '../../components/Rates/Fuel';
import SEO from '../../components/SEO';

class RatesPage extends Component {

  render() {
    return (
      <div className="is-size-5-mobile" id="rates">
        <SEO
          title="Rates | Lake Monroe Boat Rental"
          description="Rates & Pricing information for Lake Monroe Boat Rental pontoon boats, jet skis, ski boats, and more."
          path="/rates"
        />
          <Rates />
        <Fuel />
      </div>
    );
  }
  }

export default RatesPage;
