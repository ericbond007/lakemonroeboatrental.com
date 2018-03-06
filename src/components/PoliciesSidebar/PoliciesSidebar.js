import React, { Component } from 'react';
import Scroll from '../react-scroll';
import ReactGA from 'react-ga';

import './PoliciesSidebar.css';

ReactGA.initialize('UA-101048517-2');

class PoliciesSidebar extends Component {
  fireEvent() {
    ReactGA.event({
      category: 'Website Interactions',
      action: 'Clicked FAQ HashLink',
      label: 'FAQ Hashlink'
  });
  }

  render() {
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
          <Scroll type="id" element="faq">
            <p className="title is-4 is-centered hoverCursor" style={{marginTop: '2rem'}} onClick={this.fireEvent}>
              Got a question? Check out of FAQ section!
            </p>
          </Scroll>
        </div>
      </div>
    </div>
  </div>
  );
  }
  }

export default PoliciesSidebar;
