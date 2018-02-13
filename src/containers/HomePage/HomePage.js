import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SEO from '../../components/SEO';
import LazyLoad from 'react-lazyload';


import Home from '../../components/Home/Home';
import ForRent from '../../components/Home/ForRent';
import HomeSidebar from '../../components/HomeSidebar/HomeSidebar';

class HomePage extends Component {

  componentDidMount() {
  }

  render() {
    return (
      <div className="columns is-fullheight homePage is-size-4-desktop" id="home" style={{minHeight: '100%'}} ref="homepage">
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
        <LazyLoad height={500} offset={800} once >
          <ForRent />
        </LazyLoad>
      </div>
      <div className="column is-2">
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
