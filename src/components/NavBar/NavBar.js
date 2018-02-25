import React, { Component } from 'react';
import Scroll from '../react-scroll';
import Sticky from '../Sticky/Sticky';

import { NavLink } from 'react-router-dom';

import './NavBar.css';

class NavBar extends Component {
  constructor() {
    super();
    this.state = {
      fadeClass: 'fader'
    }
  }

  componentDidMount() {
    setTimeout(function() { this.setState({ fadeClass: '' }); }.bind(this), 2000);
  }

  render() {
    return (
  <div className={`navWrapper ${this.state.fadeClass}`} ref="navbar">
  <Sticky id="navbar" className="fadeIn">
  <div className="tabs is-centered is-fullwidth is-medium fadeIn">
                  <div className="navTabs fadeIn" id="noscroll">
                    
                    <Scroll type="class" element="navTabs">
                  <ul  id="navBarbig">
                      <Scroll type="id" element="rates">
                    <li className="ripple fadeIn">
                        <NavLink activeClassName="active" className="fadeIn" to="/rates">
                          Rates
                        </NavLink>
                    </li>
                      </Scroll>
                      <Scroll type="id" element="herobottom">
                    <li className="ripple">
                      <NavLink activeClassName="active" to="/boats">
                        Boats
                    </NavLink>
                  </li>
                      </Scroll>
                      <Scroll type="id" element="home">
                    <li className="ripple">
                      <NavLink  exact activeClassName="active" to="/" >
                       Home 
                    </NavLink>
                  </li>
                      </Scroll>
                      <Scroll type="id" element="policies">
                    <li className="ripple">
                      <NavLink activeClassName="active" to="/policies">
                        Policies
                    </NavLink>
                  </li>
                      </Scroll>
                      <Scroll type="id" element="contact">
                    <li className="ripple">
                      <NavLink activeClassName="active" to="/contact">
                        Contact
                    </NavLink>
                  </li>
                      </Scroll>
                </ul>
              </Scroll>
                  </div>
                </div>
              </Sticky>
            </div>
);

  }
}

  
export default NavBar;
