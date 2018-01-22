import * as types from '../constants/ActionTypes';
import initialState from './initialState';

export default function policiesReducer(state = initialState.policies, action) {
  switch(action.type) {
    case types.LOAD_POLICIES_SUCCESS:
      return action.policies
    default:
      return state;
  }
}

