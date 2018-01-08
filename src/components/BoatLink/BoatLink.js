import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

import SEO from '../SEO';

class BoatLink extends Component {
  constructor(props) {
    super(props);
  }

  getChildContext() {
    return { boatname: "double decker" };
  }

  render() {
    return (
  <div>
    <Link to={{
      pathname: `/boats/${this.props.boatlink}`,
      state: {...this.props}
    }}>
              <h2>
                {this.props.boatname}
              </h2>
              <img src={this.props.boatimg} alt={this.props.boatimgalt}/>
            </Link>
            </div>
    
    )
  }
}

BoatLink.childContextTypes = {
  boatname: PropTypes.string
}


export default BoatLink;
