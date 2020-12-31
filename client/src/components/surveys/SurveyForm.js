//surveyForm show a form for user to ass input
import React from "react";
import SurveyField from './SurveyField'
// import { Form, Field } from "react-final-form";
import { reduxForm, Field } from 'redux-form'


const SurveyForm = (props) => {

  const renderFields = () => {
    return (<div>
      <Field type='text' name='title' component={SurveyField}/>
    </div>)
  }

    return (
    <div>
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
