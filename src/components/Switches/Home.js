import React from 'react';
import { Switch, Router, Route } from 'react-router-dom';
import HomePage from '../../containers/HomePage/HomePage';

const HomeSwitch = () => {
  return (
  <Switch>
    <Route path="/" exact component={HomePage} />
  </Switch>
  )
}

export default HomeSwitch
