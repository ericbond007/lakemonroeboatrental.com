import React from 'react';
import { Link } from 'react-router-dom';
import 'react-sticky-header/styles.css';
import StickyHeader from 'react-sticky-header';

import './NavBar.css';

const NavBar = () => (
  <StickyHeader
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

export default NavBar;
