import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Tabs } from 'reactbulma'

import './NavBar.css';

class NavBar extends Component {


  render() {
    return (
      <Tabs centered fullwidth  medium>
        <ul id="navBarbig">
          <li><Link to="/" >LMBR</Link></li>
            <li ><Link to="/boats">Boats</Link></li>
            <li ><Link to="/rates">Rates</Link></li>
            <li ><Link to="/policies">Policies</Link></li>
            <li ><Link to="/contact" >Contact</Link></li>
          </ul>
        </Tabs>
    );
  }
}

export default NavBar;
