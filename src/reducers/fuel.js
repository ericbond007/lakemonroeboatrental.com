import * as types from '../constants/ActionTypes';
import initialState from './initialState';

export default function fuelReducer(state = initialState.fuel, action) {
  switch(action.type) {
    case types.LOAD_FUEL_SUCCESS:
      return action.fuel
    default:
      return state;
  }
}

