import React, { Component } from 'react';
import Policies from '../../components/Policies/Policies';
import PoliciesSidebar from '../../components/PoliciesSidebar/PoliciesSidebar';
import SEO from '../../components/SEO';
import { connect } from 'react-redux';

class PoliciesPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 800);
  }
  render() {
    return (
      <div>
        <div className="columns is-fullheight policiesPage is-size-4-desktop">
          <SEO
            title="Policies | Lake Monroe Boat Rental"
            description="Our policies are designed for the safety and security of our customers"
            path="/policies"
          />
          <div className="column is-3 is-offset-2 is-fullheight">
            <PoliciesSidebar />
          </div>
          <div className="column is-fullheight">
        {(this.props.policies) &&
          <Policies policies={this.props.policies} />
          }
        </div>
        <div className="column is-2">
        </div>
      </div>
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
