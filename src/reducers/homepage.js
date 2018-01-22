import * as types from '../constants/ActionTypes';
import initialState from './initialState';

export default function homeReducer(state = initialState.homepage, action) {
  switch(action.type) {
    case types.LOAD_HOME_PAGE_SUCCESS:
      return action.homepage
    default:
      return state;
  }
}

