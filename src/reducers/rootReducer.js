import { combineReducers } from 'redux';
import boats from './boats';
import policies from './policies';
import rates from './rates';
import homepage from './homepage';

const rootReducer = combineReducers({
  boats,
  policies,
  homepage,
  rates
});

export default rootReducer;
