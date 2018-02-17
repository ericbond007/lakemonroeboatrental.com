import { combineReducers } from 'redux';
import boats from './boats';
import policies from './policies';
import rates from './rates';
import homepage from './homepage';
import hours from './hours';
import fuel from './fuel';
import about from './about';
import faq from './faq'

const rootReducer = combineReducers({
  boats,
  policies,
  homepage,
  rates,
  hours,
  about,
  fuel,
  faq
});

export default rootReducer;
