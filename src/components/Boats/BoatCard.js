import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../Image';

const BoatCard = ({ cardImg, cardHeader, cardText, cardLink, imgAlt }) => {
  return (
    <div className="boatCard">
    <Link to={{
      pathname: `/boats/${cardLink}`,
    }}>
    <div className="card">
      <div className="card-header">
        <p className="card-header-title is-centered">
          {cardHeader}
        </p>
      </div>
      <div className="card-image">
        <figure className="is-4by3 image">
          <Image imgName={cardImg} imgAlt={imgAlt} imgLink={cardLink} />
        </figure>
      </div>
      <div className="card-content">
        <div className="is-centered">
          <p className="is-centered">{cardText}</p>
        </div>
      </div>
    </div>
  </Link>
</div>
  );
  }

  export default BoatCard;
