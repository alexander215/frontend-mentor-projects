const form = document.querySelector('.input-email-form__submit-button');
const emailAddress = document.querySelector('.input-email-form__email-input');
const errorMessage = document.querySelector('.input-email-form__error-message');
const inputContainer = document.querySelector('.input-email-form');
let errorMessageToDisplay= "Oops! Please check your email.";


const submitForm = (e) => {
  if (!validateEmail(emailAddress.value)){
    e.preventDefault();
    console.log(emailAddress.value);
    errorMessage.innerText = errorMessageToDisplay;
  } else {
    errorMessage.style.display = "none";
    inputContainer.innerText = `Thanks! ${emailAddress.value} has been added.`
  }
};

const validateEmail = (email) => {
  let validateStatus = email.includes('@') && email.includes('.');
  if (email === '') {
    errorMessageToDisplay = "Oops! Please add your email."
  }

  return validateStatus;
};

form.addEventListener('click', submitForm);
