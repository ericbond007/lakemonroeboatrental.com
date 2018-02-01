import React from 'react';

const Hours = ({ hours }) => {
  if (hours[0] !== undefined) {
    return (
      <div className="hours">
          {hours[0].acf.hours}
      </div>
    );
  } else {
    return null;
  }
};

export default Hours;
