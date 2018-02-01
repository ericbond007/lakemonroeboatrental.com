import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PoliciesPage from '../../containers/PoliciesPage/PoliciesPage';

const Policies = () => {
  return (
  <Switch>
    <Route path="/policies" exact component={PoliciesPage} />
  </Switch>
  );
}

export default Policies;
