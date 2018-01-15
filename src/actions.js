export const GET_BOATS = 'GET_BOATS'
export const GET_BOAT_BY_NAME = 'GET_BOAT_BY_ID'
export const GET_RATES = 'GET_RATES'
export const GET_POLICY = 'GET_POLICY'
export const GET_CONTACT = 'GET_CONTACT'
export const GET_HOURS = 'GET_HOURS'

export function getBoats(boats) {
  return {
    type: GET_BOATS, boats
  }
}

export function getBoatByName(boat) {
  return {
    type: GET_BOAT_BY_NAME, boat
  }
}

export function getRates(rates) {
  return {
    type: GET_RATES, rates
  }
}

export function getPolicy(policy) {
  return {
    type: GET_POLICY, policy
  }
}

export function getContact(contact) {
  return {
    type: GET_CONTACT, contact
  }
}

export getHours(hours) {
  return {
    type: GET_HOURS, hours
  }
}


