import wordpressAPI from '../api/wordpressAPI';

import * as types from '../constants/ActionTypes';

export function loadRates() {
  return function(dispatch) {
    return wordpressAPI.getRates().then(rates => {
      dispatch(loadRatesSuccess(rates));
    }).catch(error => {
      throw(error);
    });
  };
}

export function loadRatesSuccess(rates) {
  return {
    type: types.LOAD_RATES_SUCCESS,
    rates
  }
}
