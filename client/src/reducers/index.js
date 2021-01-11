import { combineReducers } from 'redux'
import { reducer as reduxForm } from 'redux-form' 
import authReducer from './authReducer'
import plansReducer from './plansReducer'
import surveysReducer from './surveysReducer'
import productsReducer from './productsReducer'
import sizesReducer from './sizesReducer'
import favoritesReducer from './favoritesReducer'

export default combineReducers({
  auth: authReducer,
  form: reduxForm,
  plans: plansReducer,
  surveys: surveysReducer,
  products: productsReducer,
  sizes: sizesReducer  ,
  favorites: favoritesReducer

})