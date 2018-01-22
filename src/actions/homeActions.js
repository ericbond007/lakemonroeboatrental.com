import wordpressAPI from '../api/wordpressAPI';

import * as types from '../constants/ActionTypes';

export function loadHomepage() {
  return function(dispatch) {
    return wordpressAPI.getHomepage().then(homepage => {
      dispatch(loadHomePageSuccess(homepage));
    }).catch(error => {
      throw(error);
    });
  };
}

export function loadHomePageSuccess(homepage) {
  return {
    type: types.LOAD_HOME_PAGE_SUCCESS,
    homepage
  }
}
