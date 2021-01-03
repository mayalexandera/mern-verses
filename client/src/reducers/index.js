import { combineReducers } from 'redux'
import { reducer as reduxForm } from 'redux-form' 
import authReducer from './authReducer'
import planReducer from './planReducer'

export default combineReducers({
  auth: authReducer,
  form: reduxForm,
  plans: planReducer
})