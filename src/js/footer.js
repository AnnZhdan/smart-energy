import throttle from 'lodash.throttle';

const LOCAL_KEY = 'feedback-form-state';
const refs = {
  form: document.querySelector('.footer-form'),
};

refs.form.addEventListener('input', throttle(handleInput, 500));
refs.form.addEventListener('submit', handleSubmit);

if (localStorage.getItem(LOCAL_KEY)) {
  const data = JSON.parse(localStorage.getItem(LOCAL_KEY));
  refs.form.elements.email.value = data.email;
}

function handleInput(event) {
  const data = {
    email: refs.form.elements.email.value,
  };
  localStorage.setItem(LOCAL_KEY, JSON.stringify(data));
}

function handleSubmit(event) {
  event.preventDefault();

  const data = {
    email: refs.form.elements.email.value,
  };
  console.log(data);
  event.currentTarget.reset();
  localStorage.removeItem(LOCAL_KEY);
}
