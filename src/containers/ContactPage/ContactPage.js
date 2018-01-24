import React, { Component } from 'react';
import Contact from '../../components/Contact/Contact';

class ContactPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 800);
  }
  render() {
    return (
      <div>
        <Contact />
      </div>
    );
  }
}

export default ContactPage;
