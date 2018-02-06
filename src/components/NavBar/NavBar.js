import React from 'react';
import Scroll from 'react-scroll-to-element';

import { NavLink } from 'react-router-dom';

import './NavBar.css';

const NavBar = () => (
  <div className="tabs is-centered is-fullwidth is-medium">
                  <div className="navTabs" id="noscroll">
                    
                      <Scroll type="class" element="navTabs">
                  <ul  id="navBarbig">
                    <li className="ripple">
                        <NavLink activeClassName="active" to="/rates">
                          Rates
                        </NavLink>
                    </li>
                    <li className="ripple">
                      <NavLink activeClassName="active" to="/boats">
                        Boats
                    </NavLink>
                  </li>
                    <li className="ripple">
                      <NavLink  exact activeClassName="active" to="/" >
                       Home 
                    </NavLink>
                  </li>
                    <li className="ripple">
                      <NavLink activeClassName="active" to="/policies">
                        Policies
                    </NavLink>
                  </li>
                    <li className="ripple">
                      <NavLink activeClassName="active" to="/contact">
                        Contact
                    </NavLink>
                  </li>
                    </ul>
                      </Scroll>
                  </div>
                </div>
);
  
export default NavBar;
