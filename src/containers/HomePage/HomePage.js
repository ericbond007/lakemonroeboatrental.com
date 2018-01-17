import React, { Component } from 'react';
import AnimatedWrapper from '../../AnimatedWrapper';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Home from '../../components/Home/Home';
/*import Home from './Home';*/

class HomeWrapper extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    let dataURL = "https://balcarth.com/wordpress/wp-json/wp/v2/boats?_embed";
    fetch(dataURL)
      .then(res => res.json())
      .then(res => {
        this.setState({
          boats: res
        })
      })
    let policies = "https://balcarth.com/wordpress/wp-json/wp/v2/br_policies?_embed";
    fetch (policies)
      .then(res => res.json())
      .then(res => {
        this.setState({
          policies: res
        })
      })

  }
  render() {
    return (
      <Home />
    );
  }
}

const HomePage = AnimatedWrapper(HomeWrapper);


export default HomePage;
