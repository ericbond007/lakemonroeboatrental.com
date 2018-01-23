import React from 'react';

const HomeSlug = ({homepage}) => {
  if (homepage[0] !== undefined && homepage[0].acf.is_visible) {
    return (
    <div className="homeSlug box">
      {homepage[0].acf.home_page_box}
    </div>
    );
    
    } else {
      return(
        null
      );
    }
};

export default HomeSlug;
