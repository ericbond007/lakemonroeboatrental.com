import React, { Component } from 'react';
import Policies from '../../components/Policies/Policies';
import PoliciesSidebar from '../../components/PoliciesSidebar/PoliciesSidebar';
import { connect } from 'react-redux';

class PoliciesPage extends Component {
  componentDidMount() {
  }
  render() {
    return (
        <div className="columns is-fullheight policiesPage is-size-4-desktop is-size-5-mobile" id="policies">
          <div className="column is-3 is-offset-2 is-fullheight is-hidden-mobile">
            {(this.props.faq) &&
            <PoliciesSidebar faq={this.props.faq} />
            }
          </div>
          <div className="column is-fullheight">
        {(this.props.policies) &&
          <Policies policies={this.props.policies} />
          }
        </div>
        <div className="column is-2">
        </div>
      </div>
    );
  }
  }

function mapStateToProps(state, ownProps) {
  return {
    policies: state.policies,
    faq: state.faq
  }
}

export default connect(mapStateToProps)(PoliciesPage);
