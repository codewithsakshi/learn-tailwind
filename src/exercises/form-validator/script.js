const formElContainer = document.querySelector('.form-container');
const userNameEl = document.querySelector('#username');
const emailEL = document.querySelector('#email');
const passwordEl = document.querySelector('#password');
const password2El = document.querySelector('#password2');
const formControlEl = document.querySelectorAll('.form-control');

function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.innerText = message;
}

function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

function getFieldName(input) {
  const id = input.getAttribute('id');
  return id.charAt(0).toUpperCase() + id.slice(1);
}

function checkEmail() {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(trim.value())) {
    showSuccess(input);
  } else {
    showError(input, 'Email is not valid');
  }
}

function checkRequired(inputArr) {
  let isRequired = false;
  for (let i = 0; i < inputArr.length; i++) {
    const input = inputArr[i];
    const value = input.value;
    if (value === '') {
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSuccess(input);
    }
  }
  return isRequired;
}

function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(
      input,
      `${getFieldName(input)} must be atleast ${min} characters`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `${getFieldName(input)} must be less than ${max} characters`
    );
  } else {
    showSuccess(input);
  }
}

function checkPasswordsMatch(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input, 'password do not match');
  }
}

formElContainer.addEventListener('submit', function (e) {
  e.preventDefault();

  const allFields = [userNameEl, emailEL, passwordEl, password2El];

  if (!checkRequired(allFields)) {
    checkLength(userNameEl, 3, 15);
    checkLength(passwordEl, 6, 18);
    checkEmail(emailEL);
    checkPasswordsMatch(passwordEl, password2El);
  }
});
