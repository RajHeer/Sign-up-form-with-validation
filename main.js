// SELECTORS
const submitBTN = document.querySelector('#submit');
const inputs = document.querySelectorAll('input');

// LISTENER

submitBTN.addEventListener('click', validate);

function validate () {
    inputs.forEach(input => {
        input.addEventListener('invalid', () => {
            input.setCustomValidity('Ten-hut! Provide info!');
            input.classList.add('invalid');
        });
    });
}
