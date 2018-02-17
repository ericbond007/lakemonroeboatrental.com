import React from 'react';
import Image from '../Image';
import Scroll from 'react-scroll-to-element';
import Slide from 'react-reveal/Slide'
import { HashLink as Link } from 'react-router-hash-link';


const BoatCard = ({ cardImg, cardHeader, cardText, cardLink, imgAlt }) => {
  return (
      <Slide bottom>
    <Scroll type="id" element="herobottom">
    <div className="boatCard ripple">
    <Link to={{
      pathname: `/boats/${cardLink}`,
    }}>
    <div className="card">
      <div className="card-header">
        <p className="card-header-title is-size-3-touch">
          {cardHeader}
        </p>
      </div>
      <div className="card-image">
        <figure className="is-4by3 image">
          <Image imgName={cardImg} imgAlt={imgAlt} imgLink={cardLink} style={{width: '100%'}}/>
        </figure>
      </div>
      <div className="card-content">
        <div className="content is-size-4-touch">
          <p>{cardText}</p>
        </div>
      </div>
    </div>
  </Link>
</div>
  </Scroll>
</Slide>
  );
  }

  export default BoatCard;
