import React, { Component } from 'react';
import Policies from '../../components/Policies/Policies';
import { connect } from 'react-redux';

class PoliciesPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div>
        {(this.props.policies) &&
          <Policies policies={this.props.policies} />
          }
      </div>
    );
  }
  }

function mapStateToProps(state, ownProps) {
  return {
    policies: state.policies
  }
}

export default connect(mapStateToProps)(PoliciesPage);
