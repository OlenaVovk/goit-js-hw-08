import throttle from 'lodash.throttle'

const form = document.querySelector(".feedback-form");
const input = document.querySelector("input");
const textarea = document.querySelector("textarea");
const KEY = "feedback-form-state";
let formData = {};

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);

onGetLocalStorage();

function onFormInput(evt) {

    formData[evt.target.name] = evt.target.value;
    console.log("Записані дані:", formData);
    const formDataJson = JSON.stringify(formData);
    localStorage.setItem(KEY, formDataJson);
}

function onFormSubmit(evt) {

    evt.preventDefault();
    console.log("ВІДПРАВКА ФОРМИ");
    console.log("Відправлені дані:", formData);
    localStorage.removeItem(KEY);
    form.reset();
    formData = {};
}

function onGetLocalStorage() {
    
    formData = JSON.parse(localStorage.getItem(KEY));
    console.log("Збережені дані:", formData);
    
    if (formData && formData.email) {
        input.value = formData.email;
    } 
    if (formData && formData.message) {   
        textarea.value = formData.message;
    } 
    if (!formData) {
    formData = {};
    }
}

