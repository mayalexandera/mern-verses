//surveyForm show a form for user to ass input
import React from "react";
import _ from "lodash";
import SurveyField from "./SurveyField";
import formFields from './formFields'

import validateEmails from "../../utils/validateEmails";
import { NavLink } from "react-router-dom";
// import { Form, Field } from "react-final-form";
import { reduxForm, Field } from "redux-form";

const SurveyForm = (props) => {
  const renderFields = () => {
    return _.map(formFields, ({ label, name, className, error }, index) => {
      return (
        <Field
          key={index}
          error={error}
          component={SurveyField}
          type='text'
          label={label}
          name={name}
          className={className}
        />
      );
    });
  };

  return (
    <div className='survey-form-wrapper'>
      <form onSubmit={props.handleSubmit(props.onSurveySubmit)}>
        {renderFields()}
        <div className='survey-button-row'>
          <NavLink className='survey-button' to='/surveys'>Cancel</NavLink>
          <button className='survey-button' type='submit'>
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

function validate(values) {
  const errors = {};
  
  errors.recipients = validateEmails(values.recipients || '' )

  _.each(formFields, ({ name, noValueError }) => {
    if (!values[name]) {
      errors[name] = noValueError;
    }
  });


  return errors;
}

// form property defines namespacing for this piece of state.
export default reduxForm({
  validate,
  form: "surveyForm",
  destroyOnUnmount: false,
})(SurveyForm);
