export default function validateCreateLink(values) {
  let errors = {};

  //Description Errors
  if (!values.description) {
    errors.description = "A descritption is required.";
  } else if (values.description.length < 10) {
    errors.description = "The description must be at least 10 characters.";
  }

  //URL Errors
  if (!values.url) {
    errors.url = "A url is required.";
  } else if (!/^(ftp|http|https):\/\/[^ "]+$/.test(values.url)) {
    errors.url = "The url must be valid.";
  }

  return errors;
}
