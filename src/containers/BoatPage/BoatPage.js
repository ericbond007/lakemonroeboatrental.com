import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Boat from '../../components/Boat/Boat';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SEO from '../../components/SEO';
import Sidebar from '../../components/Sidebar/Sidebar';


class BoatPage extends Component {
  constructor(props) {
    super();
    this.state = {
      ...props,
      boat: {}
    }
  }
  componentDidMount() {
    window.scrollTo(0, 800);

  }

  render() {
    console.log(this.props.boat);
    return (
      <div>
        <div className="columns is-fullheight boatPage">
          <div className="column is-2 is-offset-3 is-fullheight is-hidden-mobile">
            <Sidebar body="Policies: 8 hour minimum on weekends and holidays on Pontoons and Double Decker boats
"/>
          </div>
          <div className="column is-fullheight">
            {(this.props.boat) && 
            <Boat boat={this.props.boat} />
            }
          </div>
          <div className="column is-2 is-hidden-desktop">
            <Sidebar className="is-hidden-desktop"/ >
          </div>
          <div className="column is-2 is-hidden-mobile">
          </div>
        </div>
      </div>
    );
  }
}

BoatPage.propTypes = {
  boat: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  let boat = {boatname: '', max_capacity: ''};
  const boats = state.boats;
  let boatname = ownProps.location.pathname.replace(/\/boats\//, '');
  if (state.boats) {
    boat = state.boats.filter(boat => boat.acf.boatname === boatname);
  }
  return {
    boat: boat
  };

}


export default connect(mapStateToProps)(BoatPage);
