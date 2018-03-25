import React from 'react';
import { Link } from 'react-router-dom';
import Scroll from '../react-scroll';

const HomeSlug = ({homepage}) => {
  if (homepage[0] !== undefined) {
    return (
      <Scroll type="id" element="herobottom">
    <div className="homeSlug info is-info" style={{marginRight: '1rem', position: 'relative', marginBottom: '1rem'}}>
    {/*
      <div className="ribbon-holder">
         <div className="ribbon is-size-5-desktop ">Great Deal!</div>
       </div>
       */}
       <Link to="/boats/jet-ski" style={{textDecoration: 'none'}}>
      <div className="slugCenter has-text-centered is-size-3">
        <p style={{ margin: '2rem'}}>
          {homepage[0].acf.home_page_box}
        </p>
        {homepage[0].acf.home_page_second_line_is_visible ?
        <p style={{ margin: '2rem', color: '#fff'}}>
          {homepage[0].acf.home_page_second_line}
        </p> : null}
      </div>
    </Link>
    </div>
  </Scroll>
    );
    
    } else {
      return(
        null
      );
    }
};

export default HomeSlug;
