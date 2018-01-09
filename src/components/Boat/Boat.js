import React, { Component } from 'react';
import SEO from '../SEO';


class Boat extends Component {
  constructor(props) {
    super(props)
    this.state = {
      boatname: props.location.state.boatname,
      moreboats: props.location.state.boats[1].acf.boatname,
    }
  }



  componentDidMount(props) {
    var boatname = this.props.location.state.boatname;
    var boats = this.props.location.state.boats;
    
    this.boatArray = function(boats, boatname) {
      for (let i = 0; i < boats.length; i++) {
        console.log(boats.length);
      if (boatname === boats[i].acf.boatname) {
        return i;
        console.log("returned");
      }
      }
    }
    
  }



render() {
  return (
  <div className="content">
    <h1 className="boatHeader">
      {this.props.location.state.boatname}
    </h1>
    <img src={this.props.location.state.boatimg} alt={this.props.location.state.boatimgalt} />
    <div>
      {this.props.location.state.boats[1].acf.description}
    </div>
    
  </div>
  
  );
}
}

export default Boat;
