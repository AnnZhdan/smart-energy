import ScrollReveal from 'scrollreveal';

window.addEventListener('load', function () {
  // Анімація
  $(function () {
    window.sr = ScrollReveal();

    if ($(window).width() < 768) {
      if ($('.timeline-content').hasClass('js--fadeInLeft')) {
        $('.timeline-content')
          .removeClass('js--fadeInLeft')
          .addClass('js--fadeInRight');
      }

      sr.reveal('.js--fadeInRight', {
        origin: 'right',
        distance: '300px',
        easing: 'ease-in-out',
        duration: 800,
      });
    } else {
      sr.reveal('.js--fadeInLeft', {
        origin: 'left',
        distance: '300px',
        easing: 'ease-in-out',
        duration: 800,
      });

      sr.reveal('.js--fadeInRight', {
        origin: 'right',
        distance: '300px',
        easing: 'ease-in-out',
        duration: 800,
      });
    }

    sr.reveal('.js--fadeInLeft', {
      origin: 'left',
      distance: '300px',
      easing: 'ease-in-out',
      duration: 800,
    });

    sr.reveal('.js--fadeInRight', {
      origin: 'right',
      distance: '300px',
      easing: 'ease-in-out',
      duration: 800,
    });
  });
});



// Для карток з ЛС
const LS_KEY = 'favoritesList';
const paragraph = document.querySelector('.favorites-box-deskription');
const favoritesListCard = document.querySelector('.favorites-list');

function renderFavorites() {
  favoritesListCard.innerHTML = '';

  const savedFavorites = JSON.parse(localStorage.getItem(LS_KEY)) || [];

  savedFavorites.forEach(item => {
    const exerciseCard = document.createElement('li');
    exerciseCard.className = 'exercise-item favorites-exercise-item timeline-content js--fadeInLeft';
    exerciseCard.innerHTML = `
      <div class="exercise-item-wrapper ">
        <div class="exercise-item-firth-wrapper">
          <p class="exercise-item-workout">${item.exerciseName}</p>
          <button type="button" class="button favourite-delete-button" data-card-id="${item.exerciseID}">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 32 32" class="exercise-item-trash">
              <use xlink:href="./img/icon-sprite.svg#trash" style="fill: white; stroke: black"></use>
            </svg>
          </button>
          <button type="button" class="exercise-item-button" id="${item.exerciseID}">
            Start&nbsp;&nbsp;
            <svg width="16" height="16">
              <use href="./img/icon-sprite.svg#arrow"></use>
            </svg>
          </button>
        </div>
        <div class="exercise-item-second-wrapper">
          <div class="exercise-item-run-box">
            <svg class="exercise-item-run" width="16" height="16">
              <use href="./img/icon-sprite.svg#Group"></use>
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
        renderFavorites();
      }
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


// АНімація для кліку

const recommendTextBox = document.querySelector('.recommend-text-box');

const coverText = recommendTextBox.querySelector('.cover-text');

function activateAnimation() {
  coverText.style.transform = 'translateY(0)';
}

recommendTextBox.addEventListener('click', () => {
  activateAnimation();
});
