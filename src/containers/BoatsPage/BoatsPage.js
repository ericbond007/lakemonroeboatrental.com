import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Boats from '../../components/Boats/Boats';
import SEO from '../../components/SEO';



class BoatsPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 800);
  }

  render() {
    return (
      <div>
        <div className="columns is-full-height boatsPage">
      <SEO
        title="Boats | Lake Monroe Boat Rental"
        description="We have a wide variety of watercraft available for rent. Choose from poontons, double deckers, and more"
        path="/boats"
      />
      <div className="column is-2 is-offset-3 is-fullheight is-hidden-mobile">
        <p>sidebar goes here</p>
      </div>
      <div className="column is-fullheight">
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
