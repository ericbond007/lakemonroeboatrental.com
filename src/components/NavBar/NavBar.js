import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavBar.css';

const NavBar = () => (
                <div className="tabs is-centered is-fullwidth is-medium">
                  <div className="navTabs" id="noscroll">
                  <ul  id="navBarbig">
                      <li ><NavLink activeClassName="active" to="/rates">Rates</NavLink></li>
                      <li ><NavLink activeClassName="active" to="/boats">Boats</NavLink></li>
                      <li><NavLink  exact activeClassName="active" to="/" >LMBR</NavLink></li>
                      <li ><NavLink activeClassName="active" to="/about" >About</NavLink></li>
                      <li ><NavLink activeClassName="active" to="/policies">Policies</NavLink></li>
                    </ul>
                  </div>
                </div>
);
  
export default NavBar;
