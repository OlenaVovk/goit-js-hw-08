//const throttle = require('lodash.throttle');

const form = document.querySelector(".feedback-form");
const input = document.querySelector("input");
const textarea = document.querySelector("textarea");
const KEY = "feedback-form-state";
const formData = {};

form.addEventListener('input', onFormInput);
form.addEventListener('submit', onFormSubmit);

onGetLocalStorage();

function onFormInput(evt) {
    formData[evt.target.name] = evt.target.value;
    console.log("formData", formData);
    const formDataJson = JSON.stringify(formData);
    localStorage.setItem(KEY, formDataJson);
}

function onFormSubmit(evt) {
    evt.preventDefault();
    console.log("ВІДПРАВКА ФОРМИ");
    form.reset();
    localStorage.removeItem(KEY);
    console.log("formData", formData);
}

function onGetLocalStorage() {
    const savedObj = JSON.parse(localStorage.getItem(KEY));
    console.log("savedObj", savedObj);
    if (savedObj) {
        input.value = savedObj.email;
        textarea.value = savedObj.message;
    }
}

