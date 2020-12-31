//survey new shows survey form and survey review
import './Survey.css'
import React, { Component } from 'react'
import SurveyForm from './SurveyForm'

class SurveyNew extends Component {
  render() {
    return (
      <div className='survey-container'>
       <SurveyForm/>
      </div>
    )
  }
}


export default SurveyNew;