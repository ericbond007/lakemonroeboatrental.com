import React, { Component } from 'react';
import SEO from '../SEO';
import { Section, Container, Title, SubTitle } from 'reactbulma';
import './Policies.css';

const Policies = ({ policies }) => (
      <Section className="policies">
        <Container>
          <Title> Policies</Title>
          <div>
            <p className="withSpace">
              Here at Lake Monroe Boat Rental we strive to provide the best boat rental experience on Lake Monroe. We do our best to ensure customer safety and satisfaction during the rental period. Venture out to Lake Monroe and have a safe, fun day on a boat!
            </p>
          </div>
          <div>
            <p className="wthSpace">
              Lake Monroe Boat Rental Policies are as follows:
            </p>
            
            <ul className="left">
              {policies.map(policy =>
              <li key={policy.id}>
                {policy.acf.policy}
              </li>)}
            </ul>
          </div>
          <Title className="is-spaced">Cancellations</Title>
          <div>
            <ul className="left">
              <li>Pontoon & Jet Ski cancellations: must be made 72 HOURS prior to reservation time</li>
              <li>Double Decker and Ski Boat: must be made TWO WEEKS prior to scheduled reservation</li>
              <li>Multiple boat rentals: must be made ONE MONTH prior to the scheduled reservation</li>
            </ul>
          </div>
          <div>
            <h2>Weather Policy</h2>
            <p>If conditions are hazardous (tornado, hail, lightening, down pour) at the time of your scheduled rental, you will be allowed to reschedule your reservation during the same rental season. Our weather policy is based on ACTUAL weather conditions on Lake Monroe at your scheduled time, not predictions or forecasts.</p>
          </div>
        </Container>
      </Section>

);

export default Policies;
