import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="rowBehave">
          <ul className="footUl">

            <li><a rel="noopener noreferrer" target="_blank" href="https://www.facebook.com/fishinshedd"><i className="fab facebook-square" aria-label="https://www.facebook.com/fishinshedd"></i></a></li>
            <li><a rel="noopener noreferrer" target="_blank" href="https://www.instagram.com/thefishinshedd/"><i className="fab instagram" aria-label="https://www.instagram.com/thefishinshedd"></i> </a></li>
            <li><p>&copy; 2017 The Fishin Shedd</p></li>
          </ul>
      </div>
      </div>
    );
  }
}

export default Footer;
