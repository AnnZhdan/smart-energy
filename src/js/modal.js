const closeModalButton = document.getElementById('closeModalButton');
const additionalButton2 = document.getElementById('additionalButton2');
const closeModalButton2 = document.getElementById('closeModalButton2');
const myModal = document.getElementById('myModal');
const myModal2 = document.getElementById('myModal2');

let currentExerciseData = null;
let currentExerciseID = null;

function showExerciseModal(exerciseData) {
  myModal.style.display = 'block';

  const modalImage = myModal.querySelector('img');
  const modalName = myModal.querySelector('h2');
  const modalDescription = myModal.querySelector('.text-modal');
  const modalBurned = myModal.querySelector('.burn-modal');
  const modalRating = myModal.querySelector('.modal-rating');
  const modalPart = myModal.querySelector('.modal-part');
  const modalEquipment = myModal.querySelector('.modal-equipment');
  const modalTarget = myModal.querySelector('.modal-target');
  const modalPopularity = myModal.querySelector('.modal-popularity');

  modalImage.src = exerciseData.gifUrl;
  modalName.textContent =
    exerciseData.name.charAt(0).toUpperCase() + exerciseData.name.slice(1);
  modalDescription.textContent = exerciseData.description;
  modalBurned.textContent = `${exerciseData.burnedCalories}/${exerciseData.time} min`;
  modalPart.textContent = exerciseData.bodyPart;
  modalEquipment.textContent = exerciseData.equipment;
  modalTarget.textContent = exerciseData.target;
  modalPopularity.textContent = exerciseData.popularity;
  modalRating.textContent = exerciseData.rating;

  currentExerciseData = exerciseData;
}

async function updateModalWithExerciseData(exerciseID) {
  try {
    const exerciseData = await fetchExerciseDetails(exerciseID);

    if (!exerciseData) {
      console.error('Не вдалося отримати дані про вправу.');
      return;
    }

    showExerciseModal(exerciseData);
    currentExerciseID = exerciseID;
  } catch (error) {
    console.error(`Помилка: ${error.message}`);
  }
}

async function fetchExerciseDetails(exerciseID) {
  try {
    const response = await fetch(
      `https://your-energy.b.goit.study/api/exercises/${exerciseID}`
    );
    if (!response.ok) {
      throw new Error('Помилка запиту до API');
    }
    const exerciseData = await response.json();
    return exerciseData;
  } catch (error) {
    console.error('Помилка при отриманні даних про вправу:', error);
    return null;
  }
}

// const exerciseItemButtons = document.querySelectorAll('.exercise-item-button');

document.addEventListener('click', event => {
  const button = event.target.closest('.exercise-item-button');
  if (!button) {
    return;
  }
  const exerciseID = button.getAttribute('id');

  updateModalWithExerciseData(exerciseID);
});

closeModalButton.addEventListener(
  'click',
  () => (myModal.style.display = 'none')
);
additionalButton2.addEventListener('click', () => {
  myModal.style.display = 'none';
  if (currentExerciseData && currentExerciseID) {
    showExerciseModal(currentExerciseData);
    myModal2.style.display = 'block';
  }
});
closeModalButton2.addEventListener(
  'click',
  () => (myModal2.style.display = 'none')
);

myModal.style.display = 'none';
myModal2.style.display = 'none';