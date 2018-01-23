import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactbulma';



const BoatLink = ({boatname, boatName, boatlink}) => {
  return (
  <Link to={{
    pathname: `/boats/${boatname}`,
  }}>
  <Button primary large>
    {boatName}
  </Button>
</Link>
);


}



export default BoatLink;
