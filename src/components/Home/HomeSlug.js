import React from 'react';
import { Message } from 'reactbulma';

const HomeSlug = ({homepage}) => {
  if (homepage[0] !== undefined && homepage[0].acf.is_visible) {
    return (
    <Message primary className="homeSlug">
      <Message.Body>
        <div className="slugCenter">
        <p>
          {homepage[0].acf.home_page_box}
        </p>
      </div>
    </Message.Body>
  </Message>
    );
    
    } else {
      return(
        null
      );
    }
};

export default HomeSlug;
