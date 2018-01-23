import wordpressAPI from '../api/wordpressAPI';

import * as types from '../constants/ActionTypes';

export function loadFuel() {
  return function(dispatch) {
    return wordpressAPI.getFuel().then(fuel => {
      dispatch(loadFuelSuccess(fuel));
    }).catch(error => {
      throw(error);
    });
  };
}

export function loadFuelSuccess(fuel) {
  return {
    type: types.LOAD_FUEL_SUCCESS,
   fuel 
  }
}
