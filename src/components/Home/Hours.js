import React from 'react';
import { Section, Container, Button, Message } from 'reactbulma';

const Hours = ({ hours }) => {
  if (hours[0] !== undefined) {
    return (
      <div className="hours">
        <p>
          {hours[0].acf.hours}
        </p>
      </div>
    );
  } else {
    return null;
  }
};

export default Hours;
