import * as types from '../constants/ActionTypes';
import initialState from './initialState';

export default function faqReducer(state = initialState.faq, action) {
  switch(action.type) {
    case types.LOAD_FAQ_SUCCESS:
      return action.faq
    default:
      return state;
  }
}

