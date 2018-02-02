import React from 'react';
import FaFacebookSquare from 'react-icons/lib/fa/facebook-official';
import FaInstagram from 'react-icons/lib/fa/instagram';
import './Footer.css';

const Footer = () => (
  <div className="footer">
    <div className="columns is-mobile is-multiline is-centered-mobile">
      <div className="column is-offset-one-third-desktop is-1-desktop is-half-mobile  is-size-2">
            <a rel="noopener noreferrer" target="_blank" href="https://urlgeni.us/facebook/zi2i">
                <FaFacebookSquare />
            </a>
      </div>
      <div className="column is-1-desktop is-half-mobile is-size-2">
            <a rel="noopener noreferrer" target="_blank" href="https://urlgeni.us/instagram/cBgM">
                <FaInstagram />
 
            </a>
      </div>
      <div className="column  is-vertical-align">
            <p className="is-size-5">&copy; 2018 Lake Monroe Boat Rental</p>
      </div>
    </div>
    </div>
);


export default Footer;
