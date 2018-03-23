import React from 'react';
import Image from '../Image';
import Scroll from '../react-scroll';
import Slide from 'react-reveal/Slide'
import { HashLink as Link } from 'react-router-hash-link';


const BoatCard = ({ cardImg, cardHeader, cardText, cardLink, imgAlt }) => {
  return (
      <Slide bottom fraction={.01}>
    <div style={{ borderRadius: '11px', margin: '.5rem', position: 'relative'}} className="cardWrapper">
    <div className="boatCard ripple">
        <Scroll type="id" element="herobottom" style={{borderRadius: '10px'}}>
      <div style={{borderRadius: '10px'}}>
    <Link to={{
      pathname: `/boats/${cardLink}`,
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
  </Scroll>
</div>
</div>
</Slide>
  );
  }

  export default BoatCard;
