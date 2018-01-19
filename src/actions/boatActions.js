import wordpressAPI from '../api/wordpressAPI';

import * as types from '../constants/ActionTypes';

export function loadBoats() {
  return function(dispatch) {
    return wordpressAPI.getAllBoats().then(boats => {
      dispatch(loadBoatsSuccess(boats));
    }).catch(error => {
      throw(error);
    });
  };
}

export function loadBoatsSuccess(boats) {
  return {
    type: types.LOAD_BOATS_SUCCESS,
    boats
  }
}
