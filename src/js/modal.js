import svgSprite from "../img/icon-sprite.svg";
export let currentExerciseID = null;
let currentExerciseData = null;
let firstModalOpen = false;

export function setCurrentExerciseID(exerciseID) {
  currentExerciseID = exerciseID;
}

const closeModalButton = document.getElementById('closeModalButton');
const openModalButton2 = document.getElementById('additionalButton2');
const closeModalButton2 = document.getElementById('closeModalButton2');
export const myModal = document.getElementById('myModal');
const myModal2 = document.getElementById('myModal2');

function setRatingStars(rating) {
  const ratingContainer = myModal.querySelector('.modal-rating-svg');
  const stars = ratingContainer.querySelectorAll('svg use');

  stars.forEach((star, index) => {
    if (index < rating) {
      star.parentElement.classList.add('active');
    } else {
      star.parentElement.classList.remove('active');
    }
  });
}

export function showExerciseModal(exerciseData, modal) {
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
  const favoritesButton = modal.querySelector('.button-name-favorites');
  const favoritesSVG = modal.querySelector('.favorites-svg');

  modalImage.src = exerciseData.gifUrl;
  modalName.textContent = exerciseData.name.charAt(0).toUpperCase() + exerciseData.name.slice(1);
  modalDescription.textContent = exerciseData.description;
  modalBurned.textContent = `${exerciseData.burnedCalories} cal / ${exerciseData.time} min`;
  modalPart.textContent = exerciseData.bodyPart;
  modalEquipment.textContent = exerciseData.equipment;
  modalTarget.textContent = exerciseData.target;
  modalPopularity.textContent = exerciseData.popularity;
  modalRating.textContent = exerciseData.rating;

  setRatingStars(exerciseData.rating);
  
   currentExerciseData = exerciseData;

  currentExerciseData = exerciseData;
  const exerciseName = exerciseData.name.charAt(0).toUpperCase() + exerciseData.name.slice(1);

  const isExerciseInFavoritesResult = isExerciseInFavorites(exerciseName);


  if (isExerciseInFavoritesResult) {
    favoritesButton.textContent = 'Remove from favorites';
    favoritesSVG.querySelector('use').setAttribute(`href`, `${svgSprite}#trash`);
  } else {
    favoritesButton.textContent = 'Add to favorites';
    favoritesSVG.querySelector('use').setAttribute(`href`, `${svgSprite}#heart`);
  }

  if (isExerciseInFavorites(exerciseName)) {
    console.log(`Вправа "${exerciseName}" є у списку улюблених.`);
  } else {
    console.log(`Вправа "${exerciseName}" відсутня в списку улюблених.`);
  }

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

function isExerciseInFavorites(exerciseName) {
  const favoritesList = JSON.parse(localStorage.getItem('favoritesList'));

  if (favoritesList && Array.isArray(favoritesList)) {
    return favoritesList.some(item => {
      return item.exerciseName === exerciseName;
    });
  }

  return false;
}

function getExerciseInFavoritesResult(exerciseName) {
  return isExerciseInFavorites(exerciseName);
}

function openSecondModal() {
  closeModal(myModal);
  myModal2.style.display = 'block';
  document.addEventListener('keydown', closeModalOnEscape2);
}

openModalButton2.addEventListener('click', () => {
  openSecondModal();
});

export async function updateModalWithExerciseData(exerciseID, modal) {
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

export async function fetchExerciseDetails(exerciseID) {
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