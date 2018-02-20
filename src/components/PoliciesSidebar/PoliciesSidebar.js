import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

import './PoliciesSidebar.css';

const PoliciesSidebar = () => {
  return (
    <div className="policiessidebar">
    <div className="card sidebar">
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-4 is-centered">
            Safety First!
            </p>
          </div>
        </div>

        <div className="is-indent is-size-5-desktop">
        Please remember to have a safe & fun time on Lake Monroe. Always watch for other boaters and yield to faster moving boats. Our boats come with life jackets included, even for the kids! Make sure children are wearing their lifejackets. When tubing or skiing, always have a dedicated spotter turned around watching.
        </div>
        <div>
          <Link to="/policies#faq">
            <p className="title is-4 is-centered" style={{marginTop: '2rem'}}>
              Got a question? Check out of FAQ section!
            </p>
          </Link>
        </div>
      </div>
    </div>
  </div>
  );
};

export default PoliciesSidebar;
