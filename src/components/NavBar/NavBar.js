import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './NavBar.css';

class NavBar extends Component {


  render() {
    return (
      <div className="tabs is-centered is-fullwidth is-medium" id="noscroll">
        <ul id="navBarbig">
          <li><Link activeClassName="active" to="/" >LMBR</Link></li>
            <li ><Link to="/boats">Boats</Link></li>
            <li ><Link to="/rates">Rates</Link></li>
            <li ><Link to="/policies">Policies</Link></li>
            <li ><Link to="/contact" >Contact</Link></li>
          </ul>
        </div>
    );
  }
}

export default NavBar;
