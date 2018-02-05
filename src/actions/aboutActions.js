import wordpressAPI from '../api/wordpressAPI';

import * as types from '../constants/ActionTypes';

export function loadAbout() {
  return function(dispatch) {
    return wordpressAPI.getAbout().then(about => {
      dispatch(loadAboutSuccess(about));
    }).catch(error => {
      throw(error);
    });
  };
}

export function loadAboutSuccess(about) {
  return {
    type: types.LOAD_ABOUT_SUCCESS,
   about 
  }
}
