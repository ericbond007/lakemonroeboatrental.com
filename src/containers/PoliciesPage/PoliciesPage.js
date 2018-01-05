import React, { Component } from 'react';
import Policies from '../../components/Policies/Policies';

class PoliciesPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div>
        <Policies />
      </div>
    );
  }
}

export default PoliciesPage;
