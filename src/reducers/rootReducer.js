import { combineReducers } from 'redux';
import boats from './boats';
import policies from './policies';
import rates from './rates';

const rootReducer = combineReducers({
  boats,
  policies,
  rates
});

export default rootReducer;
