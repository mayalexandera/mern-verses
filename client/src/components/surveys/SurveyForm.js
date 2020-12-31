//surveyForm show a form for user to ass input
import React from "react";
import _ from "lodash";
import SurveyField from "./SurveyField";

import validateEmails from "../../utils/validateEmails";
import { Link } from "react-router-dom";
// import { Form, Field } from "react-final-form";
import { reduxForm, Field } from "redux-form";

const FIELDS = [
  { label: "Survey Title:", name: "title", className: "survey-field-row",
noValueError: 'You must provide a title.' },
  { label: "Subject Line:", name: "subject", className: "survey-field-row",
noValueError: 'You must provide a subject.' },
  {
    label: "Email Body:",
    name: "body",
    className: "survey-field-textarea email-body",
    noValueError: 'You must provide a body.'
  },
  {
    label: "Recipient List:",
    name: "emails",
    className: "survey-field-textarea",
    noValueError: 'You must provide recipient(s).'
  },
];

const SurveyForm = (props) => {
  const renderFields = () => {
    return _.map(FIELDS, ({ label, name, className }, index) => {
      return (
        <Field
          key={index}
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
          <Link className='survey-button' to='/surveys'>Cancel</Link>
          <button className='survey-button' type='submit'>
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

function validate(values) {
  // console.log(values)
  const errors = {};
  
  errors.emails = validateEmails(values.emails || '' )

  _.each(FIELDS, ({ name, noValueError }) => {
    if (!values[name]) {
      errors[name] = noValueError;
    }
  });


  return errors;
}

export default reduxForm({
  form: "surveyForm",
  validate,
})(SurveyForm);
