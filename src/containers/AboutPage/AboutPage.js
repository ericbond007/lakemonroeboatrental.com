import React, { Component } from 'react';
import About from '../../components/About/About';

class AboutPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 800);
  }
  render() {
    return (
      <div>
        <About />
      </div>
    );
  }
}

export default AboutPage;
