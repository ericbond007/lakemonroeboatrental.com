import { combineReducers } from 'redux';
import boats from './boats';
import policies from './policies';

const rootReducer = combineReducers({
  boats,
  policies
});

export default rootReducer;
