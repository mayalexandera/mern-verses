//surveyForm show a form for user to ass input
import React from "react";
import _ from 'lodash'
import SurveyField from './SurveyField'
// import { Form, Field } from "react-final-form";
import { reduxForm, Field } from 'redux-form'

const FIELDS = [
  { label: "Survey Title:", name: "title" },
  { label: "Subject Line:", name: "subject" },
  { label: "Email Body:", name: "body" },
  { label: "Recipient List:", name: "emails" },
]

const SurveyForm = (props) => {
  const renderFields = () => {
    return _.map(FIELDS, ({ label, name }, index) => {
      return <Field key={index} component={SurveyField} type="text" label={label} name={name}/>
    })
  }

    return (
    <div className='survey-form-wrapper'>
      <form onSubmit={props.handleSubmit(values => console.log(values))}>
        {renderFields()}
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default reduxForm({
  form: 'surveyForm'
})(SurveyForm);
