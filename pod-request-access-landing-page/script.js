const form = document.querySelector('.input-email-form__submit-button');
const emailAddress = document.querySelector('.input-email-form__email-input');
const errorMessage = document.querySelector('.input-email-form__error-message');
const inputContainer = document.querySelector('.input-email-form');


const submitForm = (e) => {
  if (!validateEmail(emailAddress.value)){
    e.preventDefault();
    console.log(emailAddress.value);
    errorMessage.innerText = "Oops! Please check your email."
  } else {
    errorMessage.style.display = "none";
    inputContainer.innerText = `Thanks! ${emailAddress.value} has been added.`
  }
};

const validateEmail = (email) => {
  return email.includes('@') && email.includes('.');
};

form.addEventListener('click', submitForm);
