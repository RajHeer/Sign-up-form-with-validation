// SELECTORS
const submitBTN = document.querySelector('#submit');
const inputs = document.querySelectorAll('input');

// LISTENERS

inputs.forEach(input => {
    input.addEventListener('input', () => {
      const inputError = input.nextElementSibling;
      if (input.validity.valid) {
        inputError.textContent = '';
        inputError.className = 'error';
      } else {
        showError(input);
      }
    })
  });

submitBTN.addEventListener('click', validate);

// FUNCTIONS //

function showError(input) {
      const inputError = input.nextElementSibling;
      if (input.validity.valueMissing) {
        inputError.textContent = 'Required';
      } else if (input.validity.typeMismatch) {
        inputError.textContent = 'Incorrect format';
      } else if (input.validity.patternMismatch) {
        inputError.textContent = 'Eleven digits'
      }
}

function validate (e) {
    inputs.forEach(input => {
        if (!input.validity.valid) {
            e.preventDefault();
            showError(input);
        }
    });
}
