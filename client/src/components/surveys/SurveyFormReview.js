import React from 'react';
import { connect } from 'react-redux'
import _ from 'lodash'
import formFields from './formFields'

const SurveyFormReview = ({ onCancel, formValues }) => {
  const reviewFields = _.map(formFields, ({ name, label }, index) => {
    return (
      <div className='survey-review-row' key={index}>
          <label className='survey-review-title'>
            {label}
          </label>
        <div className='survey-review-value'>
          {formValues[name]}
        </div>
      </div>
    )
  })
  return (
    <div className='survey-form-wrapper'>
      <div className='survey-review'>
        <h2>Please confirm your entries.</h2>
        {reviewFields}
        <div className='survey-button-row'>
          <button className='survey-button' onClick={onCancel}>
            Back
          </button>
          <button className='survey-button'>
            Submit Survey
          </button>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { 
    formValues: state.form.surveyForm.values
  }
}

export default connect(mapStateToProps)(SurveyFormReview);