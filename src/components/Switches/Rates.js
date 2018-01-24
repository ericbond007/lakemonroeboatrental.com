import React from 'react';
import { Switch, Router, Route } from 'react-router-dom';
import RatesPage from '../../containers/RatesPage/RatesPage';

const Rates = () => {
  return (
  <Switch>
    <Route path="/rates" exact component={RatesPage} />
  </Switch>
  );
}

export default Rates;
