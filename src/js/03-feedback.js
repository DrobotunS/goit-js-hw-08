

const formRefs = document.querySelector('.feedback-form');
const textareaRefs = document.querySelector('.feedback-form textarea');

formRefs.addEventListener('submit', onFormSubmit);
textareaRefs.addEventListener('input', onTextareaInput);



function onFormSubmit (evt) {};



function onTextareaInput (evt) {
    const message = evt.currentTarget.value;
    localStorage.setItem('feedback-mesaage', message);
    console.log(message)
};




function populateMessageOutput () {};