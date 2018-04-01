import React from 'react';
import Image from '../Image';
import { HashLink as Link } from 'react-router-hash-link';


const BoatCard = ({ cardImg, cardHeader, cardText, cardLink, imgAlt, isAccess }) => {
  return (
    <div style={{ borderRadius: '11px', margin: '.5rem', position: 'relative'}} className="cardWrapper">
    <div className="boatCard ripple">
      <div style={{borderRadius: '10px'}}>
    <Link to={{
      pathname: `/${cardLink}`,
    }}>
    <div className="">
    <div className="card">
      <div className="card-header">
        <p className="card-header-title is-size-3-touch">
          {cardHeader}
        </p>
      </div>
      <div className="card-image">
        <figure className="is-4by3 image">
          <Image imgName={cardImg} imgAlt={imgAlt} imgLink={cardLink}  divClassName="imgDrop" style={{width: '100%'}}/>
        </figure>
      </div>
      <div className="card-content">
        <div className="content is-size-4-touch">
          <p >{cardText}</p>
        </div>
      </div>
    </div>
</div>
  </Link>
</div>
</div>
</div>
  );
  }

  export default BoatCard;
