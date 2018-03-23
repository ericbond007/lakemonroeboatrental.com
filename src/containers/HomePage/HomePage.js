import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SEO from '../../components/SEO';
import LazyLoad from 'react-lazyload';
import Media from 'react-media';
import Home from '../../components/Home/Home';
import ForRent from '../../components/Home/ForRent';
import HomeSidebar from '../../components/HomeSidebar/HomeSidebar';
import Hero from './components/Hero/Hero';

class HomePage extends Component {

  componentDidMount() {
  }

  render() {
    return (
      <div className="columns is-desktop is-fullheight homePage is-size-4-desktop" id="home" style={{minHeight: '100%'}} ref="homepage">
       <SEO
          title="Lake Monroe Boat Rental"
          path="/"
          description="Located in Paynetown SRA, Lake Monroe Boat Rental is your choice for family friendly pontoon rentals. We have Double Deckers, Jet Skis, Ski Boats, and more!"
        />
      <div className="column is-3 is-offset-2 is-hidden-mobile">
        <Media query="(min-width: 1000px)">
          {matches =>
            matches ? (
        <HomeSidebar /> 
            ) : (
            <div></div>
            )
          }
        </Media>
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
