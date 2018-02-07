import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../Image';
import Scroll from 'react-scroll-to-element';

const BoatCard = ({ cardImg, cardHeader, cardText, cardLink, imgAlt }) => {
  return (
    <Scroll type="id" element="herobottom">
    <div className="boatCard ripple">
    <Link to={{
      pathname: `/boats/${cardLink}`,
    }}>
    <div className="card">
      <div className="card-header">
        <p className="card-header-title">
          {cardHeader}
        </p>
      </div>
      <div className="card-image">
        <figure className="is-4by3 image">
          <Image imgName={cardImg} imgAlt={imgAlt} imgLink={cardLink} />
        </figure>
      </div>
      <div className="card-content">
        <div className="content">
          <p>{cardText}</p>
        </div>
      </div>
    </div>
  </Link>
</div>
  </Scroll>
  );
  }

  export default BoatCard;
