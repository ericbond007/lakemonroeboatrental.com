import React from 'react';
import { Link } from 'react-router-dom';
import Scroll from '../react-scroll';

const HomeSlug = ({homepage}) => {
  if (homepage[0] !== undefined && homepage[0].acf.is_visible) {
    return (
      <Scroll type="id" element="herobottom">
    <div className="homeSlug info is-primary" style={{marginRight: '1rem', position: 'relative', marginBottom: '1rem'}}>
      <div className="ribbon-holder">
         <div class="ribbon is-size-5-desktop ">Great Deal!</div>
       </div>
       <Link to="/boats/jet-ski" style={{textDecoration: 'none'}}>
      <div className="slugCenter has-text-centered is-size-3">
        <p style={{ margin: '2rem', color: '#fff'}}>
          {homepage[0].acf.home_page_box}
        </p>
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
