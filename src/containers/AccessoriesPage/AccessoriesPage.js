import React, { Component } from 'react';
import Accessories from '../../components/Accessories/Accessories';
import Sidebar from '../../components/Sidebar/Sidebar';
import NavBar from '../../components/NavBar/NavBar';
import SEO from '../../components/SEO';

class AccessoriesPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
    render() {
      return (
        <div>
          <NavBar />
          <SEO
            title="Accessories | Lake Monroe Boat Rental"
            path="/accessories"
            description="Rent all your water accessories! Tubes, skis, ropes, and life jackets are available."
          />
        <div className="columns is-fullheight boatsPage is-size-4-desktop is-size-5-mobile">
          <div className="column is-3 is-offset-2 is-hidden-mobile">
            <Sidebar />
          </div>
          <div className="column is-fullheight">
            <Accessories />
          </div>
          <div className="column is-2">
          </div>
        </div>
      </div>
      );
  }
  }

export default AccessoriesPage;
