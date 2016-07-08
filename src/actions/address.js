import { SET_ADDRESS, SET_ADDRESS_DATA } from '../constants'

export function setAddress(address) {
  return { type: SET_ADDRESS, address }
}

export function setAddressData(data) {
  return { type: SET_ADDRESS_DATA, data }
}
