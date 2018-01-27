import React from 'react';
import { Switch, Router, Route } from 'react-router-dom';
import AboutPage from '../../containers/AboutPage/AboutPage';

const About = () => {
  return (
  <Switch>
    <Route path="/about" exact component={AboutPage} />
  </Switch>
  );
}

export default About;
