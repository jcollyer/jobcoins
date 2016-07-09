import { initialState } from '../api/initial-state'
import { SET_ADDRESS, SET_ADDRESS_DATA } from '../constants'

export default function address(state = initialState, action) {
  switch (action.type) {
    case SET_ADDRESS:
      return {
        address: action.address,
        balance: state.balance,
        transactions: state.transactions,
        equalizer: state.equalizer
      }
		case SET_ADDRESS_DATA:
      // get highest amount
      let biggestValue = Math.max.apply(Math,action.data.transactions.map((t)=>{return t.amount}))
      let baseHeight = 400
      let equate = baseHeight/biggestValue;
      return {
        address: state.address,
        balance: action.data.balance,
        transactions: action.data.transactions,
        equalizer: equate
      }
    default:
      return state
  }
}
