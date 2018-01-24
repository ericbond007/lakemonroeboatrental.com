import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../Image';

const BoatCard = ({ cardImg, cardText, cardLink, imgAlt }) => {
  return (
    <div>
    <Link to={{
      pathname: `/boats/${cardLink}`,
    }}>
    <div className="card boatCard">
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
  );
  }

  export default BoatCard;
