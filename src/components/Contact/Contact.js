import React, { Component } from 'react';
import SEO from '../SEO';

import './Contact.css';

class Contact extends Component {
  constructor() {
    super();
    this.state = {
      boats: []
    }
  }
  
  componentDidMount(prevProps) {
  }

  render() {
    return (
      <div>
        <SEO
          title="Contact | Lake Monroe Boat Rental"
          description="Located in Paynetown SRA"
          path="/"
        />
      
      <div className="content">
              <h1 className="landingTitle">Contact Us</h1>
            </div>
      </div>

    );
  }
}

export default Contact;
