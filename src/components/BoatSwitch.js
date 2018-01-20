import React from 'react';
import { Switch, Router, Route } from 'react-router-dom';
import BoatsPage from '../containers/BoatsPage/BoatsPage';
import BoatPage from '../containers/BoatPage/BoatPage';

const BoatSwitch = () => {
  return (
  <Switch>
    <Route path="/boats" exact component={BoatsPage} />
    <Route path="/boats/doubledecker" exact component={BoatPage} boatname="Double Decker" />
    <Route path="/boats/jet-ski" exact component={BoatPage} boatname="Jet Ski" />
  </Switch>
  )
}

export default BoatSwitch
