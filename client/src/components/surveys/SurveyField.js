//survey field contains logic to render a single label and input

import React, { Fragment } from 'react' 

const SurveyField = ({ input, label, className, meta: { error, touched } }) => {
  console.log(error, touched)
  return (
    <Fragment>
      <div className={className}>
        <label>{label}</label>
        {className === "survey-field-row" ? (
          <input {...input} />
        ) : (
          <textarea {...input} />
        )}
        <div className='survey-field-error-message'>{ touched && error }</div>
      </div>
    </Fragment>
  );
}

export default SurveyField;