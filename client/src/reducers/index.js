import { combineReducers } from 'redux'
import { reducer as reduxForm } from 'redux-form' 
import authReducer from './authReducer'
import planReducer from './planReducer'
import surveysReducer from './surveysReducer'

export default combineReducers({
  auth: authReducer,
  form: reduxForm,
  plans: planReducer,
  surveys: surveysReducer
})