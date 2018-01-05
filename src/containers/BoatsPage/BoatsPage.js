import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Boats from '../../components/Boats/Boats';
import Boat from '../../components/Boat/Boat';


const BoatsPage = () => (
  <Switch>
    <Route exact path='/boats' component={Boats}/>
    <Route path='/boats/:boat' component={Boat}/>
  </Switch>
)


export default BoatsPage;
