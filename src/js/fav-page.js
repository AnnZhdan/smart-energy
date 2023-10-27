// import ScrollReveal from 'scrollreveal';
import './header.js';
import svgSprite from '../img/icon-sprite.svg'
import './api.js';
// import { fetchExerciseDetails } from './api';
// import { updateModalWithExerciseData, setCurrentExerciseID, showExerciseModal, myModal } from './modal.js';


document.addEventListener('DOMContentLoaded', function() {
  // Для карток з ЛС
  const LS_KEY = 'favoritesList';
  const paragraph = document.querySelector('.favorites-box-deskription');
  const favoritesListCard = document.querySelector('.favorites-list');
  // const startButtons = document.querySelectorAll('.exercise-item-button');
  
  function renderFavorites() {
    favoritesListCard.innerHTML = '';
    const savedFavorites = JSON.parse(localStorage.getItem(LS_KEY)) || [];
    savedFavorites.forEach(item => {
      const exerciseCard = document.createElement('li');
      exerciseCard.className = 'exercise-item favorites-exercise-item timeline-content js--fadeInLeft';
      exerciseCard.innerHTML = `
        <div class="exercise-item-wrapper ">
          <div class="exercise-item-firth-wrapper">
             <p class="exercise-item-workout">WORKOUT</p>
            <button type="button" class="button favourite-delete-button" data-card-id="${item.exerciseID}">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 32 32" class="exercise-item-trash">
                <use xlink:href="${svgSprite}#trash" style="fill: white; stroke: black"></use>
              </svg>
            </button>
            <button type="button" class="exercise-item-button exercise-item-fav" id="${item.exerciseID}">
              Start&nbsp;&nbsp;
              <svg width="16" height="16">
                <use href="${svgSprite}#arrow"></use>
              </svg>
            </button>
          </div>
          <div class="exercise-item-second-wrapper">
            <div class="exercise-item-run-box">
              <svg class="exercise-item-run" width="16" height="16">
                <use href="${svgSprite}#Group"></use>
              </svg>
            </div>
            <h3 class="exercise-item-subtitle">${item.exerciseName}</h3>
          </div>
          <ul class="exercise-item-list">
            <li class="exercise-item-list-information">
              <p class="information-text">
                Burned calories:<span class="information-text-span">${item.exerciseBurned}</span>
              </p>
            </li>
            <li class="exercise-item-list-information">
              <p class="information-text">
                Body part:<span class="information-text-span">${item.exercisePart}</span>
              </p>
            </li>
            <li class="exercise-item-list-information">
              <p class="information-text">
                Target:<span class="information-text-span">${item.exerciseTarget}</span>
              </p>
            </li>
          </ul>
        </div>
      `;
      
      favoritesListCard.appendChild(exerciseCard);
    });
    
    if (savedFavorites.length === 0) {
      paragraph.style.display = 'block';
  
    }
  
    const deleteButtons = document.querySelectorAll('.favourite-delete-button');
      deleteButtons.forEach(deleteButton => {
      deleteButton.addEventListener('click', function () {
  
        const cardId = deleteButton.getAttribute('data-card-id');
        let exercises = JSON.parse(localStorage.getItem(LS_KEY)) || [];
        const indexToRemove = exercises.findIndex(exercise => exercise.exerciseID === cardId);
  
        if (indexToRemove !== -1) {
          exercises.splice(indexToRemove, 1);
          localStorage.setItem(LS_KEY, JSON.stringify(exercises));
         
        }
        if (!exercises || exercises.length === 0) {
          paragraph.style.display = 'block';
        }
         renderFavorites();
      });
      });

  }
  
  function createCards() {
    try {
      const save = localStorage.getItem(LS_KEY);
      if (save) {
        paragraph.style.display = 'none';
        renderFavorites();
      } else {
        paragraph.style.display = 'block';
      }
    } catch (error) {
      console.error(error);
    }
  }
  
  createCards();
});


// АНімація для кліку

const recommendTextBox = document.querySelector('.recommend-text-box');

const coverText = recommendTextBox.querySelector('.cover-text');

function activateAnimation() {
  coverText.style.transform = 'translateY(0)';
}

recommendTextBox.addEventListener('click', () => {
  activateAnimation();
});


////////////////////////////////////// Модалка\\\\\\\\
// document.addEventListener('DOMContentLoaded', function () {

//   function openModal(exerciseData) {
//     updateModalWithExerciseData(exerciseData, modal);
//   }

//   startButtons.forEach(button => {
//     button.addEventListener('click', function () {
 
//       openModal(exerciseData);
//     });

//   });
// });

// //     function openModal(exerciseID) {

//   const exerciseData = savedFavorites.find(item => item.exerciseID === exerciseID);
//   if (exerciseData) {

//     showExerciseModal(exerciseData, modal);
//   } else {
//     console.log('Вправу з вказаним exerciseID не знайдено серед збережених вправ.');
//   }
  
//       console.log(exerciseID)

//     startButtons.forEach(button => {
//   button.addEventListener('click', function() {
//     const exerciseID = button.getAttribute('data-card-id');
//     openModal(exerciseID);
//   });
// });
    
//     // Функція для відображення деталей вправи в модальному вікні
//   function showExerciseModal(exerciseData, modal) {
//     modal.style.display = 'block';

//     const modalImage = modal.querySelector('img');
//     const modalName = modal.querySelector('h2');
//     const modalDescription = modal.querySelector('.text-modal');
//     const modalBurned = modal.querySelector('.burn-modal');
//     const modalRating = modal.querySelector('.modal-rating');
//     const modalPart = modal.querySelector('.modal-part');
//     const modalEquipment = modal.querySelector('.modal-equipment');
//     const modalTarget = modal.querySelector('.modal-target');
//     const modalPopularity = modal.querySelector('.modal-popularity');

//     modalImage.src = exerciseData.gifUrl;
//     modalName.textContent = exerciseData.name.charAt(0).toUpperCase() + exerciseData.name.slice(1);
//     modalDescription.textContent = exerciseData.description;
//     modalBurned.textContent = `${exerciseData.burnedCalories} cal / ${exerciseData.time} min`;
//     modalPart.textContent = exerciseData.bodyPart;
//     modalEquipment.textContent = exerciseData.equipment;
//     modalTarget.textContent = exerciseData.target;
//     modalPopularity.textContent = exerciseData.popularity;
//     modalRating.textContent = exerciseData.rating;


//   }

//   // Закрити модальне вікно при кліку на кнопку "Close" або клавішу "Escape"
//   const closeModal = () => {
//     modal.style.display = 'none';
//   };

//   modal.addEventListener('click', event => {
//     if (event.target === modal) {
//       closeModal();
//     }
//   });

//   const closeButton = modal.querySelector('.close-button');
//   closeButton.addEventListener('click', () => {
//     closeModal();
//   });

//   const closeModalOnEscape = event => {
//     if (event.key === 'Escape' && modal.style.display === 'block') {
//       closeModal();
//     }
//   };

//   document.addEventListener('keydown', closeModalOnEscape);