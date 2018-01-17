import React from 'react';
import AnimatedWrapper from '../../AnimatedWrapper';
import { Switch, Route } from 'react-router-dom';
import Boats from '../../components/Boats/Boats';
import Boat from '../../components/Boat/Boat';


const BoatsWrapper = () => (
  <Switch>
    <Route exact path='/boats' component={Boats}/>
    <Route path='/boats/:boat' component={Boat}/>
  </Switch>
)

const BoatsPage = AnimatedWrapper(BoatsWrapper);

export default BoatsPage;
