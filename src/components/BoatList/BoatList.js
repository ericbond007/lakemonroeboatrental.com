import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactbulma';
import { Link } from 'react-router-dom';

const BoatList = ({ boats }) => {
  return (
    <div>
      {boats.map(boat =>
        <Button primary medium key={boat.id}>
          {boat.acf.boatname}
        </Button>
        )}
      </div>
      
    );
    };

BoatList.propTypes = {
  boats: PropTypes.array.isRequired
}

export default BoatList;
