import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SEO from '../../components/SEO';


import Home from '../../components/Home/Home';
import ForRent from '../../components/Home/ForRent';
import Map from '../../components/Home/Map';
import HomeSidebar from '../../components/HomeSidebar/HomeSidebar';

class HomePage extends Component {
  componentDidMount() {
  }

  render() {
    return (
      <div>
      <div className="columns is-fullheight homePage is-size-4-desktop">
       <SEO
          title="Lake Monroe Boat Rental"
          description="Located in Paynetown SRA"
          path="/"
        />
      <div className="column is-3 is-offset-2 is-hidden-mobile">
        <HomeSidebar /> 
      </div>
      <div className="column is-fullheight">
        <Home {...this.props} />
        <Map />
        <ForRent />
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
