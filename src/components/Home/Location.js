import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import {  Col, Row, Well, Image } from 'react-bootstrap';

const Location = (state) => (
      <div>
          <Row className="leftjust">
            <Col sm={4} className="location">
              <p>Come see us! Just 6 miles south of Bloomington</p>
                <a rel="noopener noreferrer" target="_blank" href="https://www.google.com/maps/place/The+Fishin+Shedd/@39.0944962,-86.4237921,15z/data=!4m5!3m4!1s0x0:0xc93bcd5938c701d9!8m2!3d39.0926281!4d-86.4224884" >
                  <ScrollAnimation animateIn="fadeInRight"  animateOnce offset={60} >
                    <Image responsive className="boxedShadow mapImg" src="sheddMap-min.png" alt="Map of The Fishin Shedd" />
                  </ScrollAnimation>
                  <p>
                  4855 S State Road 446
                  Bloomington, IN
                  47401
                  </p>
                </a>

            </Col>
                
              <Col sm={8}>
                <Well className="wellDark">
									 <p>
 The Fishin Shedd is located on Indiana State Road 446,  6 miles southeast of Bloomington, IN. "The Shedd" is        directly across the street from the DNR Visitor's Center and the entrance to  Paynetown State Recreation Area. We    began our 50th year in business on April 1, 2017 and we are STILL...
									 </p>
									 <h2 className="center bigP">"All in the Family!"</h2>
                </Well>
            		<h3 className="center">Dick Shedd's Fall Weather Forecast</h3>
		            <p>
Alternating periods of sunshine and clouds. Rain at times. Dark at night. Brighter when sun is shining, Warmer       during the day.
		            </p>
              </Col>
          </Row>
      </div>
);

export default Location;
