import React, { Component } from 'react';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Home from '../../components/Home/Home';

class HomePage extends Component {
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

  }
  render() {
    return (
      <div>
        <Home />
        <button onClick={() => this.props.changePage()}>Go to</button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  changePage: () => push('/boats')
}, dispatch)


export default connect(
  null,
  mapDispatchToProps
)(HomePage);
