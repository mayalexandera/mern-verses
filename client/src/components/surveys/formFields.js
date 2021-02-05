const formFields = [
  {
    label: "Survey Title:",
    name: "title",
    className: "survey-field-row",
    noValueError: "You must provide a title.",
  },
  {
    label: "Subject Line:",
    name: "subject",
    className: "survey-field-row",
    noValueError: "You must provide a subject.",
  },
  {
    label: "Email Body:",
    name: "body",
    className: "survey-field-textarea email-body",
    noValueError: "You must provide a body.",
  },
  {
    label: "Recipient List:",
    name: "recipients",
    className: "survey-field-textarea",
    noValueError: "You must provide recipient(s).",
  },
];

export default formFields