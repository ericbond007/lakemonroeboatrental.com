import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as boatActions from '../../actions/boatActions';
import SEO from '../../components/SEO';

import Home from '../../components/Home/Home';
import HomeSlug from '../../components/Home/HomeSlug';
import ForRent from '../../components/Home/ForRent';
import Map from '../../components/Home/Map';

class HomePage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="homePage">
       <SEO
          title="Lake Monroe Boat Rental"
          description="Located in Paynetown SRA"
          path="/"
        />

      <Home {...this.props} />
      <Map />
      <ForRent {...this.props} />
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
