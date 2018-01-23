import * as types from '../constants/ActionTypes';

export const getBoats = (boats) => ({
  type: types.GET_BOATS,
  boats
})

export const getBoatByID = (boat, id) => ({
  type: types.GET_BOAT_BY_ID,
  boat,
  id
})

export const getRates = (rates) => ({
  type: types.GET_RATES,
  rates
})

export const getPolicies = (policies) => ({ 
  type: types.GET_POLICIES,
  policies
})

export const getContact = (contact) => ({
  type: types.GET_CONTACT,
  contact
})

export const getHomePage = (homepage) => ({
  type: types.GET_HOME_PAGE,
  homepage
})

export const getHours = (hours) => ({ 
  type: type.GET_HOURS,
  hours
})

export const getFuel = (fuel) => ({
  type: type.GET_FUEL,
  fuel
})
