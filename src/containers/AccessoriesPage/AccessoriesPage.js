import React, { Component } from 'react';
import Accessories from '../../components/Accessories/Accessories';
import SEO from '../../components/SEO';
import BoatsSidebar from '../../components/BoatsSidebar/BoatsSidebar';

class AccessoriesPage extends Component {
    render() {
      return (
        <div className="columns is-fullheight boatsPage is-size-4-desktop is-size-5-mobile">
          <SEO
            title="Water Accessories | Lake Monroe Boat Rental"
            description="Tubes, Skis, and more!"
            path="/boats/accessories"
          />
          <div className="column is-3 is-offset-2 is-hidden-mobile">
            <BoatsSidebar />
          </div>
          <div className="column is-fullheight">
            <Accessories />
          </div>
          <div className="column is-2">
          </div>
        </div>
      );
  }
  }

export default AccessoriesPage;
