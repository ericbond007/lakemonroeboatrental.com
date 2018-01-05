import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './NavBar.css';

class NavBar extends Component {


  render() {
    return (
      <header className="header">
        <div className="pure-menu pure-menu-horizontal">
          <Link to="/" className="pure-menu-heading pure-menu-link">LMBR</Link>
          <ul className="pure-menu-list">
            <li className="pure-menu-item"><Link to="/boats" className="pure-menu-link">Boats</Link></li>
            <li className="pure-menu-item"><Link to="/rates" className="pure-menu-link">Rates</Link></li>
            <li className="pure-menu-item"><Link to="/policies" className="pure-menu-link">Policies</Link></li>
            <li className="pure-menu-item"><Link to="/contact" className="pure-menu-link">Contact Us</Link></li>
          </ul>
        </div>
    </header>
    );
  }
}

export default NavBar;
