//survey new shows survey form and survey review
import './Survey.css'
import React, { Component } from 'react'
import { reduxForm } from 'redux-form'
import SurveyForm from './SurveyForm'
import Dashboard from "../Dashboard/Dashboard";
import SurveyFormReview from "./SurveyFormReview";

class SurveyNew extends Component {

  state = { showFormReview: false }

  renderContent() {
    if (this.state.showFormReview) {
      return <SurveyFormReview onCancel={() => this.setState({ showFormReview: false })}/>
    }
    return <SurveyForm onSurveySubmit={() => this.setState({showFormReview: true})}/>
  }

  render() {
    return (
      <div className='top'>
        <div className='spacer'/>
        <Dashboard />
        <div className='survey-container'>{this.renderContent()}</div>
      </div>
    );
  }
}

//reduxForm defaults to destoryOnUnmount
export default reduxForm({
  form: 'surveyForm' 
})(SurveyNew);