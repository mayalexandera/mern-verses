//survey field contains logic to render a single label and input

import React from 'react' 

export default ({ input, label }) => {
  return (
    <div className='survey-field-row'>
      {/* the input object from props (destructed and passed as argument to component is some amount of functions.  by using the spread operator, react will automatically add each property.  this frees you from having to pass each property a la onBlur={input.onBlur} onChange={input.onChange} etc */}
      <label>{label}</label>
      <input {...input} />
    </div>
  )
}