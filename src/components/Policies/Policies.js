import React, { Component } from 'react';
import SEO from '../SEO';

import './Policies.css';

class Policies extends Component {
  constructor() {
    super();
    this.state = {
      policies: []
    }
  }
  
  componentDidMount() {
    function isPolicies(policy) {
      return policy.slug === 'policies';
    }
    let dataURL = "https://balcarth.com/wordpress/wp-json/wp/v2/pages?_embed";
    fetch(dataURL)
      .then(res => res.json())
      .then(res => {
        let policies = res.filter(isPolicies);
        let policy = policies[0].content.rendered;
        this.setState({
          policy: policy
        })
      })
  }

  render() {
    return (
      <div>
        <SEO
          title="Policies | Lake Monroe Boat Rental"
          description="Located in Paynetown SRA"
          path="/"
        />
      
      <div className="content">
              <h1 className="landingTitle">Policies</h1>
              <p>{this.state.policy}</p>

            </div>
      </div>

    );
  }
}

export default Policies;
