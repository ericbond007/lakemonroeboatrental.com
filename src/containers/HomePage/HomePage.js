import React, { Component } from 'react';
import Home from '../../components/Home/Home';

class HomePage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div>
        <Home />
      </div>
    );
  }
}

export default HomePage;
