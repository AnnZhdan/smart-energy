const openModalButton = document.getElementById('openModalButton');
const closeModalButton = document.getElementById('closeModalButton');
const additionalButton2 = document.getElementById('additionalButton2');
const closeModalButton2 = document.getElementById('closeModalButton2');
const myModal = document.getElementById('myModal');
const myModal2 = document.getElementById('myModal2');


function showExerciseModal(exerciseData) {
  myModal.style.display = 'block';

  const modalImage = myModal.querySelector('img');
  const modalName = myModal.querySelector('h2');
  const modalDescription = myModal.querySelector('p');
  const modalRating = myModal.querySelector('.modal-rating');

  modalImage.src = exerciseData.gifUrl;
  modalImage.alt = exerciseData.name;
  modalName.textContent = exerciseData.name;
  modalDescription.textContent = exerciseData.description;

  modalRating.innerHTML = '';

  
  for (let i = 0; i < exerciseData.rating; i++) {
    const starSVG = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    starSVG.setAttribute('width', '25');
    starSVG.setAttribute('height', '25');
    const useElement = document.createElementNS('http://www.w3.org/2000/svg', 'use');
    useElement.setAttribute('xlink:href', './img/icon-sprite.svg#icon-Star-2');
    starSVG.appendChild(useElement);
    modalRating.appendChild(starSVG);
  }
}

async function updateModalWithExerciseData(exerciseID) {
  try {
    const exerciseData = await fetchExerciseDetails(exerciseID);

    if (!exerciseData) {
      console.error('Не вдалося отримати дані про вправу.');
      return;
    }

    showExerciseModal(exerciseData);
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


openModalButton.addEventListener('click', () => {
  const exerciseID = '64f389465ae26083f39b17c2';
  updateModalWithExerciseData(exerciseID);
});

closeModalButton.addEventListener('click', () => myModal.style.display = 'none');
additionalButton2.addEventListener('click', () => myModal2.style.display = 'block');
closeModalButton2.addEventListener('click', () => myModal2.style.display = 'none');