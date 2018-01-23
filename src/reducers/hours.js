import * as types from '../constants/ActionTypes';
import initialState from './initialState';

export default function hoursReducer(state = initialState.hours, action) {
  switch(action.type) {
    case types.LOAD_HOURS_SUCCESS:
      return action.hours
    default:
      return state;
  }
}

