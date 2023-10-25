export let currentExerciseID = null;
let currentExerciseData = null;
let firstModalOpen = false;

export function setCurrentExerciseID(exerciseID) {
  currentExerciseID = exerciseID;
}

const closeModalButton = document.getElementById('closeModalButton');
const openModalButton2 = document.getElementById('additionalButton2');  
const closeModalButton2 = document.getElementById('closeModalButton2');
const myModal = document.getElementById('myModal');
const myModal2 = document.getElementById('myModal2');

function showExerciseModal(exerciseData, modal) {
  modal.style.display = 'block';

  const modalImage = modal.querySelector('img');
  const modalName = modal.querySelector('h2');
  const modalDescription = modal.querySelector('.text-modal');
  const modalBurned = modal.querySelector('.burn-modal');
  const modalRating = modal.querySelector('.modal-rating');
  const modalPart = modal.querySelector('.modal-part');
  const modalEquipment = modal.querySelector('.modal-equipment');
  const modalTarget = modal.querySelector('.modal-target');
  const modalPopularity = modal.querySelector('.modal-popularity');

  modalImage.src = exerciseData.gifUrl;
  modalName.textContent = exerciseData.name.charAt(0).toUpperCase() + exerciseData.name.slice(1);
  modalDescription.textContent = exerciseData.description;
  modalBurned.textContent = `${exerciseData.burnedCalories} cal / ${exerciseData.time} min`;
  modalPart.textContent = exerciseData.bodyPart;
  modalEquipment.textContent = exerciseData.equipment;
  modalTarget.textContent = exerciseData.target;
  modalPopularity.textContent = exerciseData.popularity;
  modalRating.textContent = exerciseData.rating;

  currentExerciseData = exerciseData;

  modal.addEventListener('click', event => {
    if (event.target === modal) {
      closeModal(modal);
    }
  });

  const closeModalOnEscape = event => {
    if (event.key === 'Escape' && modal.style.display === 'block') {
      closeModal(modal);
      document.removeEventListener('keydown', closeModalOnEscape);
    }
  };

  document.addEventListener('keydown', closeModalOnEscape);

  const closeButton = modal.querySelector('.close-button');
  closeButton.addEventListener('click', () => {
    closeModal(modal);
    document.removeEventListener('keydown', closeModalOnEscape);
  });
}

function openSecondModal() {
   closeModal(myModal);
  myModal2.style.display = 'block';
  document.addEventListener('keydown', closeModalOnEscape2);

}


openModalButton2.addEventListener('click', () => {
  openSecondModal();
});

async function updateModalWithExerciseData(exerciseID, modal) {
  try {
    const exerciseData = await fetchExerciseDetails(exerciseID);

    if (!exerciseData) {
      console.error('Не вдалося отримати дані про вправу.');
      return;
    }

    showExerciseModal(exerciseData, modal);
    currentExerciseID = exerciseID;

    if (modal === myModal) {
      firstModalOpen = true;
    }
  } catch (error) {
    console.error(`Помилка: ${error.message}`);
  }
}

async function fetchExerciseDetails(exerciseID) {
  try {
    const response = await fetch(`https://your-energy.b.goit.study/api/exercises/${exerciseID}`);
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

document.addEventListener('click', event => {
  const button = event.target.closest('.exercise-item-button');
  if (!button) {
    return;
  }
  const exerciseID = button.getAttribute('id');

  updateModalWithExerciseData(exerciseID, myModal);
});

function closeModal(modal) {
  modal.style.display = 'none';
}

function closeModal2() {
  myModal2.style.display = 'none';
}

closeModalButton2.addEventListener('click', () => {
  closeModal2();
  document.removeEventListener('keydown', closeModalOnEscape2);
});

myModal2.addEventListener('click', event => {
  if (event.target === myModal2) {
    closeModal2();
  }
});

const closeModalOnEscape2 = event => {
  if (event.key === 'Escape' && myModal2.style.display === 'block') {
    closeModal2();
    document.removeEventListener('keydown', closeModalOnEscape2);
  }
};

document.addEventListener('keydown', closeModalOnEscape2);