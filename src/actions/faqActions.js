import wordpressAPI from '../api/wordpressAPI';

import * as types from '../constants/ActionTypes';

export function loadFAQ() {
  return function(dispatch) {
    return wordpressAPI.getFAQ().then(faq => {
      dispatch(loadFAQSuccess(faq));
    }).catch(error => {
      throw(error);
    });
  };
}

export function loadFAQSuccess(faq) {
  return {
    type: types.LOAD_FAQ_SUCCESS,
    faq
  }
}
