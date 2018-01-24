import React from 'react';
import { Switch, Router, Route } from 'react-router-dom';
import ContactPage from '../../containers/ContactPage/ContactPage';

const Contact = () => {
  return (
  <Switch>
    <Route path="/contact" exact component={ContactPage} />
  </Switch>
  );
}

export default Contact;
