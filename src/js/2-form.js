'use strict';
const feedbackForm = document.querySelector('.feedback-form');
const textarea = feedbackForm.elements.email;
const localStorageKey = 'feedback-form-state';

textarea.value = localStorage.getItem(localStorageKey) ?? '';

feedbackForm.addEventListener('input', event => {
  localStorage.setItem(localStorageKey, JSON.stringify(event.target.value));
});

function formHandler(event) {
  event.preventDefault();
  const form = event.target;
  const email = form.elements.email.value.trim();
  const message = form.elements.message.value.trim();
  const user = {};

  if (email === '' || message === '') {
    return alert('All form fields must be filled in!');
  } else {
    user.email = email;
    user.message = message;
  }
  console.log(user);
  localStorage.removeItem(localStorageKey);
  form.reset();
}

feedbackForm.addEventListener('submit', formHandler);
