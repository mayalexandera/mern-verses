//survey field contains logic to render a single label and input

import React, { Fragment } from 'react' 

const SurveyField = ({ input, label, className, meta: { error, touched } }) => {
  console.log(error, touched)
  return (
    <Fragment>
      <div className={className}>
        {/* the input object from props (destructed and passed as argument to component is some amount of functions.  by using the spread operator, react will automatically add each property.  this frees you from having to pass each property a la onBlur={input.onBlur} onChange={input.onChange} etc */}
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