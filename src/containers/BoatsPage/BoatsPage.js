import React, { Component } from 'react';
import Boats from '../../components/Boats/Boats';
import BoatsSidebar from '../../components/BoatsSidebar/BoatsSidebar';
import SEO from '../../components/SEO';
import NavBar from '../../components/NavBar/NavBar';




class BoatsPage extends Component {
  componentDidMount() {
  }

  render() {
    return (
      <div>
        <NavBar />
      <div className="columns is-fullheight boatsPage is-size-4-desktop is-size-5-mobile is-desktop" id="boats">
        <SEO
          title="Boats | Lake Monroe Boat Rental"
          path="/boats"
          description="Boats for rent at Lake Monroe Boat Rental. We have double deckers, pontoons, jet skis, ski boats, & more!"
        />
      <div className="column is-3 is-offset-2 is-hidden-touch">
        <BoatsSidebar />
      </div>
      <div clssname="column is-fullheight">
          <Boats />
      </div>
      <div className="column is-2">
      </div>
    </div>
    </div>

    );
  }
}



export default BoatsPage;
