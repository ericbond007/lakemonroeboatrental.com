import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import 'react-sticky-header/styles.css';
import StickyHeader from 'react-sticky-header';

import './NavBar.css';

class NavBar extends Component {
  state = {
    sticky: false,
  };

  onSticky = (sticky: boolean) => {
  };

  render() {
    return (
  <StickyHeader
      {...this.props}
  onSticky={this.onSticky}
    header={
                <div className="tabs is-centered is-fullwidth is-medium" id="noscroll">
                  <ul id="navBarbig">
                    <li><NavLink  exact activeClassName="active" to="/" >LMBR</NavLink></li>
                      <li ><NavLink activeClassName="active" to="/boats">Boats</NavLink></li>
                      <li ><NavLink activeClassName="active" to="/rates">Rates</NavLink></li>
                      <li ><NavLink activeClassName="active" to="/policies">Policies</NavLink></li>
                      <li ><NavLink activeClassName="active" to="/contact" >Contact</NavLink></li>
                    </ul>
                  </div>
  
    }
  >
  </StickyHeader>
    
    );
  }
}

export default NavBar;
