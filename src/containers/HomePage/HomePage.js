import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as boatActions from '../../actions/boatActions';
import SEO from '../../components/SEO';

import Home from '../../components/Home/Home';
import BoatList from '../../components/BoatList/BoatList';

class HomePage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
       <SEO
          title="Lake Monroe Boat Rental"
          description="Located in Paynetown SRA"
          path="/"
        />

      <Home />
      <BoatList boats={this.props.boats} />
    </div>
    );
  }
  }

HomePage.propTypes = {
  boats: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    boats: state.boats
  };
}


export default connect(mapStateToProps)(HomePage);
