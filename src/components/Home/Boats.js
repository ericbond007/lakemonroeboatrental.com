import React from 'react';
import HomeBoatLink from '../HomeBoatLink/HomeBoatLink';


const Boats = () => {
  return (
      <div className="boatButtons">
        	<h3>Available For Rent</h3>                         
          <HomeBoatLink boatname="Double Decker" boatlink="doubledecker" buttonText="Double Decker Pontoons" boatimg="doubleDecker.jpg" />
          <HomeBoatLink boatname="20' Pontoon" boatlink="20-pontoon" buttonText="Pontoon Boats"  />
          <HomeBoatLink boatname="jet-ski" boatlink="jet-ski" buttonText="Jet Skis"  />
          <HomeBoatLink boatname="ski-boat" boatlink="ski-boat" buttonText="Ski Boats"  />
        </div>
    
  );
};

export default Boats;
