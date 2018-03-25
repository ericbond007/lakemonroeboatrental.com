import React, { Component } from 'react';
import Boat from '../../components/Boat/Boat';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Sidebar from '../../components/Sidebar/Sidebar';
import SEO from '../../components/SEO';
import NavBar from '../../components/NavBar/NavBar';


class BoatPage extends Component {
  constructor(props) {
    super();
    this.state = {
      ...props,
      boat: {}
    }
  }
  componentDidMount() {
    window.scrollTo(0,0);

  }

  render() {
    return (
      <div>
        <NavBar />
        <div className="columns is-desktop is-fullheight boatPage">
          <SEO
            title="Boats | Lake Monroe Boat Rental"
            description="Boats for rent at Lake Monroe Boat Rental"
          />
          <div className="column is-3 is-offset-2 is-hidden-touch">
            <Sidebar />
          </div>
          <div className="column is-fullheight" id="boat" style={{}}>
            {(this.props.boat) && 
            <Boat boat={this.props.boat} />
            }
          </div>
          <div className="column is-hidden-desktop" style={{paddingTop: '-3rem'}}>
            <Sidebar className="is-hidden-desktop"/ >
          </div>
          <div className="column is-2 is-hidden-touch">
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
  let boatname = ownProps.location.pathname.replace(/\/boats\//, '');
  if (state.boats) {
    boat = state.boats.filter(boat => boat.acf.boatname === boatname);
  }
  return {
    boat: boat
  };

}


export default connect(mapStateToProps)(BoatPage);
