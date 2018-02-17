import React from 'react';
import FaFacebookSquare from 'react-icons/lib/fa/facebook-official';
import FaInstagram from 'react-icons/lib/fa/instagram';
import Media from 'react-media';
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
      <div className="column is-vertical-align">
        <Media query="(max-width: 767px)">
          {matches => matches ? (
            <a href="tel:+1-812-837-9909">
              <p className="is-size-5">Call us! 812-837-9909</p>
            </a>
          ):(
          <p className="is-size-5">Call us! 812-837-9909</p>
          )}
        </Media>
      </div>
    </div>
    </div>
);


export default Footer;
