import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Boats from '../../components/Boats/Boats';
import Sidebar from '../../components/Sidebar/Sidebar';
import SEO from '../../components/SEO';



class BoatsPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 800);
  }

  render() {
    return (
      <div>
      <SEO
        title="Boats | Lake Monroe Boat Rental"
        description="We have a wide variety of watercraft available for rent. Choose from poontons, double deckers, and more"
        path="/boats"
      />
        <Boats /> 

      </div>
    );
  }
}



export default BoatsPage;
