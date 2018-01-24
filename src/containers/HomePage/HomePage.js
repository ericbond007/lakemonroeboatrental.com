import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as boatActions from '../../actions/boatActions';
import SEO from '../../components/SEO';

import { Hero } from 'reactbulma';

import Home from '../../components/Home/Home';
import HomeSlug from '../../components/Home/HomeSlug';
import ForRent from '../../components/Home/ForRent';
import Map from '../../components/Home/Map';
import Sidebar from '../../components/Sidebar/Sidebar';
import Image from '../../components/Image';

class HomePage extends Component {
  componentDidMount() {
    window.scrollTo(0, 800);
  }

  render() {
    return (
      <div>
      <div className="columns is-fullheight homePage">
       <SEO
          title="Lake Monroe Boat Rental"
          description="Located in Paynetown SRA"
          path="/"
        />
      <div className="column is-2 is-offset-3 is-mobile is-fullheight is-hidden-mobile">
        <Sidebar header="test" body="body"/>
      </div>
      <div className="column is-fullheight">
        <Home {...this.props} />
        <Map />
        <ForRent {...this.props} />
      </div>
      <div className="column is-2">
      </div>
    </div>
  </div>
    );
  }
  }

HomePage.propTypes = {
  boats: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    boats: state.boats,
    homepage: state.homepage,
    hours: state.hours
  };
}


export default connect(mapStateToProps)(HomePage);
