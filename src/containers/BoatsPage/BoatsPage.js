import React, { Component } from 'react';
import Boats from '../../components/Boats/Boats';
import Sidebar from '../../components/Sidebar/Sidebar';
import SEO from '../../components/SEO';
import BoatsSidebar from '../../components/BoatsSidebar/BoatsSidebar';



class BoatsPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 800);
  }

  render() {
    return (
      <div className="columns is-fullheight boatsPage is-size-4-desktop">
      <SEO
        title="Boats | Lake Monroe Boat Rental"
        description="We have a wide variety of watercraft available for rent. Choose from poontons, double deckers, and more"
        path="/boats"
      />
      <div className="column is-3 is-offset-2 is-hidden-mobile">
        <BoatsSidebar />
      </div>
      <div clssname="column is-fullheight">
        <Boats /> 
      </div>
      <div className="column is-2">
      </div>
    </div>
    );
  }
}



export default BoatsPage;
