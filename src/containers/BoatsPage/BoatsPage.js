import React, { Component } from 'react';
import Boats from '../../components/Boats/Boats';
import BoatsSidebar from '../../components/BoatsSidebar/BoatsSidebar';
import LazyLoad from 'react-lazyload';




class BoatsPage extends Component {
  componentDidMount() {
  }

  render() {
    return (
      <div className="columns is-fullheight boatsPage is-size-4-desktop is-size-5-mobile is-desktop" id="boats">
      <div className="column is-3 is-offset-2 is-hidden-touch">
        <BoatsSidebar />
      </div>
      <div clssname="column is-fullheight">
        <LazyLoad>
          <Boats />
        </LazyLoad>
      </div>
      <div className="column is-2">
      </div>

    </div>

    );
  }
}



export default BoatsPage;
