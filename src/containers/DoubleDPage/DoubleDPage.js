import React, { Component } from 'react';
import DoubleD from '../../components/DoubleD/DoubleD';

class DoubleDPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div>
        <DoubleD />
      </div>
    );
  }
}

export default DoubleDPage;
