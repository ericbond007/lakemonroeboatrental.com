import wordpressAPI from '../api/wordpressAPI';

import * as types from '../constants/ActionTypes';

export function loadPolicies() {
  return function(dispatch) {
    return wordpressAPI.getPolicies().then(policies => {
      dispatch(loadPoliciesSuccess(policies));
    }).catch(error => {
      throw(error);
    });
  };
}

export function loadPoliciesSuccess(policies) {
  return {
    type: types.LOAD_POLICIES_SUCCESS,
    policies
  }
}
