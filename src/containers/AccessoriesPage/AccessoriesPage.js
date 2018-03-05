import React, { Component } from 'react';
import Accessories from '../../components/Accessories/Accessories';
import Sidebar from '../../components/Sidebar/Sidebar';

class AccessoriesPage extends Component {
    render() {
      return (
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
      );
  }
  }

export default AccessoriesPage;
