import React from 'react';
import { Section, Title } from 'reactbulma';

import './About.css';

const About = () => {
    return (
      <div style={{marginTop: '-5rem'}}>
      <Section className="about">
              <Title>About Us</Title>
              <div className="is-size-5-desktop">
              <p className="withSpace">
                Lake Monroe Boat Rental, Inc., has enjoyed a long association with the Monroe Reservoir community, commencing operations in 1980 under the ownership of Rick Shedd, the then-22 year-old son of Richard and Barbara Shedd, who opened the nearby <a rel="noopener noreferrer" target="_blank" href="https://thefishinshedd.com">Fishin’ Shedd</a> in 1968. With a small fleet of fishing boats remaining from the former Cutright Boat Rental, Rick began trailering boats for rental customers to various launch sites. Rick and his wife Jenny incorporated the business in 1990, and in 1991 under a contractual arrangement with the State of Indiana, began operating the Paynetown Campstore inside the Paynetown State Recreation Area. In 1992, the Boat Rental’s association with the State expanded to include offering rental watercraft, directly on the shoreline behind the Paynetown Campstore. It is a relationship that has continued uninterrupted ever since, under the capable direction of long-term general manager Damon Cappy.
              </p>
              <p className="withSpace">
                Rick and Jenny feel privileged to have enjoyed such a long-standing relationship with the State of Indiana and with you, the customers they serve. The family-owned modest fleet of fishing boats expanded over the years to include all manner of watercraft:  fishing boats, ski boats, jet skis, and pontoon boats, double-decker pontoons with slides, kayaks, canoes and even paddleboards. There is no shortage of ways available to enjoy Indiana’s largest lake! And whether you are renting a boat for the day, have a boat of your own, are just visiting the Park or settled in at a campsite, be sure and stop in at the Paynetown Campstore located inside the Paynetown State Recreation Area. The Campstore houses the rental side of the business, but it is also the go-to for a wide variety of products including camping supplies, bait and tackle, grocery items, firewood, ice, candy and sno-cones.
              </p>
              <p className="withSpace">
                In 2017, Rick and Jennifer acquired ownership of <a rel="noopener noreferrer" target="_blank" href="https://thefishinshedd.com">The Fishin’ Shedd</a>—the family business Rick and his siblings grew up in--located across the street from the entrance to the Paynetown State Recreation Area. On April 1, 2018, Rick and his extended family will celebrate 50 years of serving the Lake Monroe Community!  We hope you will have the opportunity soon, to visit beautiful Lake Monroe and spend a day (or two!) with us. Bring your friends. Bring your family. We are here for you!
              </p>
            </div>
            </Section>
      </div>
      );
      };

export default About;
