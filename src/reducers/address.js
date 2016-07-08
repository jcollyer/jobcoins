import { initialState } from '../api/initial-state'
import { SET_ADDRESS, SET_ADDRESS_DATA } from '../constants'

export default function address(state = initialState, action) {
  switch (action.type) {
    case SET_ADDRESS:
      return {
        address: action.address,
        balance: state.balance,
        transactions: state.transactions,
      }
		case SET_ADDRESS_DATA:
      return {
        address: state.address,
        balance: action.data.balance,
        transactions: action.data.transactions,
      }
    default:
      return state
  }
}
