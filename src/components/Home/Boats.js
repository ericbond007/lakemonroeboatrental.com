import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Boats extends Component {
  constructor(props) {
    super(props);

    this.state={ open: false};
  }

  render() {
    return (
      <div>
        	<h3>Available For Rent</h3>                         
				<div className="prettyButtons">                      
          <Link to="/boats">
            <button className="pure-button">
							Double Decker Pontoons
            </button>
          </Link>
          <Link to="/boats">
            <button className="pure-button">
							Pontoon Boats
            </button>
          </Link>
          <Link to="/boats">
            <button className="pure-button">Jet Skis</button>                                                     
          </Link>
          <Link to="/boats">
            <button className="pure-button">Ski  Boats</button>                                                    
          </Link>
          <Link to="/boats">
            <button className="pure-button">Canoes & Kayas</button>                                     
          </Link>
      </div>
        </div>
    );
  }
}

export default Boats;
