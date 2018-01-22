import * as types from '../constants/ActionTypes';
import initialState from './initialState';

export default function rateReducer(state = initialState.rates, action) {
  switch(action.type) {
    case types.LOAD_RATES_SUCCESS:
      return action.rates
    default:
      return state;
  }
}

