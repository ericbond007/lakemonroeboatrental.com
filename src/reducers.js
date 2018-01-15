import {
  GET_BOATS,
  GET_BOAT_BY_NAME,
  GET_RATES,
  GET_POLICY,
  GET_CONTACT,
  GET_HOURS
} from './actions'

const initialState = {
  boats: [],
  boat: []
}

function lmbr(state = initialState, action) {
  switch (action.type) {
    case GET_BOATS:
      return { 
        ...state, boats: action.boats
      }
    case GET_BOATS_BY_NAME:
      return {
        ...state, boat: action.boatname
      }
    default:
      return state
      
  }
}
