import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactbulma';

import PropTypes from 'prop-types';


class HomeBoatLink extends Component {


  render() {
    return (
  <div>
    <Link to={{
      pathname: `/boats/${this.props.boatlink}`,
      state: {...this.props}
    }}>
    <Button info medium>
      {this.props.buttonText}
    </Button>
            </Link>
            </div>
    
    )
  }
}

HomeBoatLink.childContextTypes = {
  boatname: PropTypes.string
}


export default HomeBoatLink;
