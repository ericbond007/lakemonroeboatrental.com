import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
                    <li><Link activeClassName="active" to="/" >LMBR</Link></li>
                      <li ><Link to="/boats">Boats</Link></li>
                      <li ><Link to="/rates">Rates</Link></li>
                      <li ><Link to="/policies">Policies</Link></li>
                      <li ><Link to="/contact" >Contact</Link></li>
                    </ul>
                  </div>
  
    }
  >
  </StickyHeader>
    
    );
  }
}

export default NavBar;
