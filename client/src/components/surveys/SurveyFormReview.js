import React from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { NavLink } from "react-router-dom";

import Payments from "../Payments/Payments";

import * as actions from '../../actions'
import _ from 'lodash'
import formFields from './formFields'

const SurveyFormReview = ({ onCancel, formValues, auth, submitSurvey, history }) => {
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

  const verifyCredits = () => {
    return auth.credits > 0 ? (
      <div>
        credits: <p className='survey-review-value'>{auth.credits}</p>
        <button
          onClick={() => submitSurvey(formValues, history)}
          className='survey-button'
        >
          Submit Survey
        </button>
      </div>
    ) : (
      <div className='add-credits-wrapper'>
        <div>You do not have enough credits</div>
        <div><Payments/></div>
      </div>
    );
  }
  return (
    <div className='survey-form-wrapper'>
      <div className='survey-review'>
        <h2>Please confirm your entries.</h2>
        {reviewFields}
        <div className='survey-button-row'>
          <button className='survey-button' onClick={onCancel}>
            Back
          </button>
        <div>{verifyCredits()}</div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { 
    formValues: state.form.surveyForm.values,
    auth: state.auth
  }
}

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));