import { combineReducers } from 'redux';
import boats from './boats';
import policies from './policies';
import rates from './rates';
import homepage from './homepage';
import hours from './hours';

const rootReducer = combineReducers({
  boats,
  policies,
  homepage,
  rates,
  hours
});

export default rootReducer;
