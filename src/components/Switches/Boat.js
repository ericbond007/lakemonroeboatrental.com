import React from 'react';
import { Switch,  Route } from 'react-router-dom';
import BoatsPage from '../../containers/BoatsPage/BoatsPage';
import BoatPage from '../../containers/BoatPage/BoatPage';
import AccessoriesPage from '../../containers/AccessoriesPage/AccessoriesPage';

const Boat = () => {
  return (
  <Switch>
    <Route path="/boats" exact component={BoatsPage} />
    <Route path="/boats/doubledecker" exact component={BoatPage} />
    <Route path="/boats/20-pontoon" exact component={BoatPage} />
    <Route path="/boats/24-pontoon" exact component={BoatPage} />
    <Route path="/boats/28-pontoon" exact component={BoatPage} />
    <Route path="/boats/jet-ski" exact component={BoatPage} />
    <Route path="/boats/ski-boat" exact component={BoatPage} />
    <Route path="/boats/fishing-boat" exact component={BoatPage} />
    <Route path="/boats/non-motorized" exact component={BoatPage} />
    <Route path="/boats/accessories" exact component={AccessoriesPage} />
  </Switch>
  );
}

export default Boat;
