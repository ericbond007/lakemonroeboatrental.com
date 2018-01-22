import React, { Component } from 'react';
import SEO from '../SEO';
import { Section, Container, Title, SubTitle } from 'reactbulma';
import './Policies.css';

const Policies = ({ policies }) => (
      <Section className="policies">
        <Container>
          <Title> Policies</Title>
          <div>
            <ul>
              {policies.map(policy =>
              <li key={policy.id}>
                {policy.acf.policy}
              </li>)}
            </ul>
          </div>
        </Container>
      </Section>

);

export default Policies;
