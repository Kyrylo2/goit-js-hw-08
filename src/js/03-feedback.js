import '../css/common.css';
import '../css/03-feedback.css';
import throttle from 'lodash.throttle';
// isEmpty Lodash is true when the object is empty and false when it is not.
import isEmpty from 'lodash.isempty';

// create variable for localStorage
const STORAGE_KEY = 'feedback-form-state';
// create object for form data
let formData = {};

// DOM elements
const feedBackForm = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('.feedback-form input'),
  textArea: document.querySelector('.feedback-form textarea'),
};

// first initialization function ********
// Checks if the form has localStorage and fill all inputs and textarea fields
fillFormAreas();

// Event handlers for the form ********
// event on submit
feedBackForm.form.addEventListener('submit', onFormSubmit);
// event on any input that creates json localStorage object
feedBackForm.form.addEventListener('input', throttle(jsonFormObj, 500));

// Functions for the form ********

// Function that creates json localStorage object
function jsonFormObj(e) {
  if (!isEmpty(localStorage.getItem(STORAGE_KEY))) {
    formData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  }

  // create object key and object value from form fields
  formData[e.target.name] = e.target.value;

  // modify form object to json stringify data
  const formObj = JSON.stringify(formData);

  // set modified json form object to localStorage
  localStorage.setItem(STORAGE_KEY, formObj);
}

// Function that initializes on form submit
function onFormSubmit(e) {
  // remove reloading the page
  e.preventDefault();

  // Sending form data object to console
  console.log(isEmpty(formData) ? 'Please fill all fields' : formData);

  // Clean localStorage, form fields and formData object
  e.currentTarget.reset();
  formData = {};
  localStorage.removeItem(STORAGE_KEY);
}

function fillFormAreas() {
  const formObj = JSON.parse(localStorage.getItem(STORAGE_KEY));
  // check if the form contains the data
  if (!isEmpty(formObj)) {
    // if local Storage is not empty then fill form fields

    // object destructuring of local storage in object format
    const { email, message } = formObj;

    // also removes undefined if one of the fields is empty
    feedBackForm.email.value = email !== undefined ? email : '';
    feedBackForm.textArea.value = message !== undefined ? message : '';
  }
}
