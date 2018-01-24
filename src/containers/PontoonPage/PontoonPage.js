import React, { Component } from 'react';
import Pontoon from '../../components/Pontoon/Pontoon';

class PontoonPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 800);
  }
  render() {
    return (
      <div>
        <Pontoon />
      </div>
    );
  }
}

export default PontoonPage;
