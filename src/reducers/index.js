import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import address from './address'

const rootReducer = combineReducers({
  address,
  form: formReducer
})

export default rootReducer
