import React, { Component } from 'react';
import Footer from '../../components/Footer/Footer';
import Hero from '../../components/Hero/Hero';

class Layout extends Component {
  componentDidMount() {
  }


  render() {
    return (
      <section>
        <Hero />
        {this.props.children}
        <Footer />
      </section>
      
    );
  }

}

export default Layout
