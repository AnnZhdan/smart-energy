import Notiflix from "notiflix";

import { setExerciseRating } from './api.js';
import { currentExerciseID} from './modal.js';

const ratingForm = document.getElementById('ratingForm');
const selectedRat = document.getElementById('selectedRat');
const emailInput = document.getElementById('emailInput');
const commentInput = document.getElementById('commentInput');

ratingForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const rate = parseFloat(selectedRat.textContent);
  const email = emailInput.value;
  const review = commentInput.value;

  if (!isValidEmail(email)) {
    Notiflix.Notify.failure('Enter a valid email');
    return;
  }

  const _id = currentExerciseID; 

  const exerciseID = await getExerciseIDBy_id(_id);

  if (exerciseID) {
    const dataToSend = {
      rate: rate,
      email: email,
      review: review,
    };

    const requestBody = JSON.stringify(dataToSend);

    await setExerciseRating(exerciseID, rate, requestBody);

    Notiflix.Notify.success('success');
    myModal2.style.display = 'none';
  } else {
    Notiflix.Notify.failure('Error: The exercise could not be found.');
  }
});

function isValidEmail(email) {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zAZ0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailPattern.test(email);
}

async function getExerciseIDBy_id(_id) {
  try {
    const apiUrl = `https://your-energy.b.goit.study/api/exercises/${_id}`;
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`Request to get exercise by _id failed with status ${response.status}`);
    }

    const data = await response.json();
    return data._id;
  } catch (error) {
    console.error(`Error: ${error.message}`);
    return null; 
  }
}