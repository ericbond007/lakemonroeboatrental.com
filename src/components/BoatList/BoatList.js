import React from 'react';
import { Button } from 'reactbulma';
import { Link } from 'react-router-dom';

const BoatList = ({ boatName }) => {
  return (
    <div>
        <Button primary large>
          {boatName}
        </Button>
      </div>
    );
    };

export default BoatList;
