// SELECTOR
const submitBTN = document.querySelector('#submit');

// LISTENER

submitBTN.addEventListener('click', (e) =>{
    console.log(e.target.value);
})
