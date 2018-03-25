import React, { Component } from 'react';
import Scroll from '../react-scroll';
import Sticky from '../Sticky/Sticky';
import ReactGA from 'react-ga';

import { NavLink } from 'react-router-dom';

import './NavBar.css';

ReactGA.initialize('UA-101048517-2');

class NavBar extends Component {
  constructor() {
    super();
    this.state = {
      fadeClass: 'fader'
    }
  }

  fireRates() {
    ReactGA.event({
      category: 'Navbar Interactions',
      action: 'Clicked Rates Tab',
      label: 'navication links'
    });
  }

  fireBoats() {
    ReactGA.event({
      category: 'Navbar Interactions',
      action: 'Clicked Boats Tab',
      label: 'navication links'
    });
  
  }

  fireHome() {
    ReactGA.event({
      category: 'Navbar Interactions',
      action: 'Clicked Home Tab',
      label: 'navication links'
    });
  }

  firePolicies() {
    ReactGA.event({
      category: 'Navbar Interactions',
      action: 'Clicked Policies Tab',
      label: 'navication links'
    });
  }

  fireContact() {
    ReactGA.event({
      category: 'Navbar Interactions',
      action: 'Clicked Contact Tab',
      label: 'navication links'
    });
  }

  componentDidMount() {
    setTimeout(function() { this.setState({ fadeClass: '' }); }.bind(this), 500);
    window.scrollTo(0, 0);
  }

  render() {
    return (
  <div className={`navWrapper ${this.state.fadeClass}`} ref="navbar">
  <Sticky id="navbar" className="fadeIn">
  <div className="tabs is-centered is-fullwidth is-medium fadeIn">
                  <div className="navTabs fadeIn" id="noscroll">
                    
                  <ul  id="navBarbig">
                      <Scroll type="id" element="herobottom">
                    <li className="ripple fadeIn" onClick={this.fireRates}>
                        <NavLink activeClassName="active" className="fadeIn" to="/rates">
                          Rates
                        </NavLink>
                    </li>
                      </Scroll>
                      <Scroll type="id" element="herobottom">
                    <li className="ripple" onClick={this.fireBoats}>
                      <NavLink activeClassName="active" to="/boats">
                        Boats
                    </NavLink>
                  </li>
                      </Scroll>
                      <Scroll type="id" element="herobottom">
                    <li className="ripple" onClick={this.fireHome}>
                      <NavLink  exact activeClassName="active" to="/" >
                       Home 
                    </NavLink>
                  </li>
                      </Scroll>
                      <Scroll type="id" element="herobottom">
                    <li className="ripple" onClick={this.firePolicies}>
                      <NavLink activeClassName="active" to="/policies">
                        Policies
                    </NavLink>
                  </li>
                      </Scroll>
                      <Scroll type="id" element="herobottom">
                    <li className="ripple" onClick={this.fireContact}>
                      <NavLink activeClassName="active" to="/contact">
                        Contact
                    </NavLink>
                  </li>
                      </Scroll>
                </ul>
                  </div>
                </div>
              </Sticky>
            </div>
);

  }
}

  
export default NavBar;
