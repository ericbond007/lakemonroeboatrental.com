import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Image from '../Image';

import PropTypes from 'prop-types';


class BoatLink extends Component {


  render() {
    return (
  <div>
    <Link to={{
      pathname: `/boats/${this.props.boatlink}`,
    }}>
              <h2>
                {this.props.boatlink}
              </h2>
              <Image imgName={this.props.imgName} imgAlt={this.props.imgAlt} />
            </Link>
            {this.props.boatname}
            </div>
    
    )
  }
}

BoatLink.childContextTypes = {
  boatname: PropTypes.string
}


export default BoatLink;
