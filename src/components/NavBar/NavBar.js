import React, { Component } from 'react';
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
    window.scrollTo(0, 0);
  }

  render() {
    return (
  <div className="navWrapper">
  <Sticky id="navbar" className="">
  <div className="tabs is-centered is-fullwidth is-medium fadeIn">
                  <div className="navTabs fadeIn" id="noscroll">
                    
                  <ul  id="navBarbig">
                    <li className="ripple fadeIn" onClick={this.fireRates}>
                        <NavLink activeClassName="active" className="fadeIn" to="/rates">
                          Rates
                        </NavLink>
                    </li>
                    <li className="ripple" onClick={this.fireBoats}>
                      <NavLink activeClassName="active" to="/boats">
                        Boats
                    </NavLink>
                  </li>
                    <li className="ripple" onClick={this.fireHome}>
                      <NavLink  exact activeClassName="active" to="/" >
                       Home 
                    </NavLink>
                  </li>
                    <li className="ripple" onClick={this.firePolicies}>
                      <NavLink activeClassName="active" to="/policies">
                        Policies
                    </NavLink>
                  </li>
                    <li className="ripple" onClick={this.fireContact}>
                      <NavLink activeClassName="active" to="/contact">
                        Contact
                    </NavLink>
                  </li>
                </ul>
                  </div>
                </div>
              </Sticky>
            </div>
);

  }
}

  
export default NavBar;
