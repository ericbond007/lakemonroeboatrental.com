import React from 'react';
import { Section, Title } from 'reactbulma';
import Directions from './Directions';

import './About.css';

const About = ({ about }) => (
      <div>
      <Section className="about">
              <Title>About Us</Title>
              <div className="is-size-5-desktop">
              <p className="withSpace">
                {about[0].acf.paragraph0}
              </p>
              <p className="withSpace">
                {about[0].acf.paragraph1}
              </p>
              <p className="withSpace">
                {about[0].acf.paragraph2}
              </p>
              <p className="withSpace">
                {about[0].acf.paragraph3}
              </p>
              <p className="withSpace">
                {about[0].acf.paragraph4}
              </p>
            </div>
            </Section>
      </div>
    );

export default About;
