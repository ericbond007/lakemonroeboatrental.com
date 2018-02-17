import React from 'react';

import './PoliciesSidebar.css';

const PoliciesSidebar = ({ faq }) => {
  if (faq !== undefined) {
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
            <p className="title is-4 is-centered" style={{marginTop: '2rem'}}>
            FAQ
          </p>
          <ul>
            {faq.map(faq =>
            <div id={faq.id}>
            <li className="faQuestion">
              {faq.acf.question}
            </li>
            <li>
              {faq.acf.answer}
            </li>
          </div>)}
          </ul>
        </div>
      </div>
    </div>
  </div>
  );
  } else {
    return null;
  }
};

export default PoliciesSidebar;
