import React from 'react';
import { Section, Container } from 'reactbulma';
import Image from '../Image';

const Directions = () => (
  <div className="directions" id="directions">
        <div className="leftIndent is-size-6-desktop">
          <p className="has-text-weight-semibold">
          From North of Bloomingtion
        </p>
        <p>
Take Indiana 37 South to Bloomington.  Look for the 45/46 bypass, the exit will be on the right side of the highway (it will curve around and head East).  Just follow the signs to Indiana University Assembly Hall and stadium, you will then drive past it.  Take the 45/46 bypass to 3rd Street (46 East) and turn left at the light.  Go East on 46 to the 4th light (Hwy 446 South - there will be a Brusters Ice Cream), turn right. The Fishin'Shedd is about 6.5 miles from 46 and Lake Monroe Boat Rental is located in Paynetown State Recreation Area which is directly across the street from The Fishin' Shedd.
        </p>
          <p className="has-text-weight-semibold">
          From South of Bloomingtion
        </p>
        <p>
          Take Indiana 37 North to Bloomington.  Turn right on the 45/46 bypass, (follow signs to Indiana University Assembly Hall and stadium) take this road to 46 East/3rd Street and turn left at the light. Go East on 46 to the 4th light (Hwy 446 South - there will be a Brusters Ice Cream), turn right. The Fishin' Shedd is about 6.5 miles from 46 and Lake Monroe Boat Rental is located in Paynetown State Recreation Area which is directly across the street from The Fishin' Shedd.
        </p>
          <p className="has-text-weight-semibold">
          From Fairfax, Four Winds, and Eagle Pointe
        </p>
        <p>
          Take Fairfax Road to Mofit Lane turn right. Follow Mofit Lane around to Stipp Road and Moores Creek Road.  At the 3-way stop, turn right onto  Swartz Ridge Road, go up the big hill and follow Swartz Ridge to 446. Turn Right on 446. Go down about 3.2 miles, The Fishin'Shedd on the left and Lake Monroe Boat Rental is located in Paynetown State Recreation Area which is directly across the street from The Fishin' Shedd.
        </p>
      </div>
        <a rel="noopener noreferrer" target="_blank" href="https://www.google.com/maps/place/Lake+Monroe+Boat+Rental+Inc/@39.0817314,-86.4368141,17z/data=!3m1!4b1!4m5!3m4!1s0x886c654522e1fb7f:0x7e1299e6fcb7313!8m2!3d39.0817314!4d-86.4346254">
          <p className="has-text-centered">Click here to go Google Maps</p>
        </a>
  </div>
);

export default Directions;
