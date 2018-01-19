import * as types from '../constants/ActionTypes';
import initialState from './initialState';

export default function boatReducer(state = initialState.boats, action) {
  switch(action.type) {
    case types.LOAD_BOATS_SUCCESS:
      return action.boats
    default:
      return state;
  }
}

