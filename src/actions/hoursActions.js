import wordpressAPI from '../api/wordpressAPI';

import * as types from '../constants/ActionTypes';

export function loadHours() {
  return function(dispatch) {
    return wordpressAPI.getHours().then(hours => {
      dispatch(loadHoursSuccess(hours));
    }).catch(error => {
      throw(error);
    });
  };
}

export function loadHoursSuccess(hours) {
  return {
    type: types.LOAD_HOURS_SUCCESS,
    hours
  }
}
