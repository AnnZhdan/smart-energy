window.addEventListener('load', function () {
  const listItems = document.querySelectorAll('.nav-list li');
  const homeNavItem = listItems[0];
  const favoritesNavItem = listItems[1];

  const currentPageURL = window.location.href;

  function changeClass() {
    if (currentPageURL.includes('favorites.html')) {
      homeNavItem.classList.remove('active');
      favoritesNavItem.classList.add('active');
    }
  }
  changeClass();

  // Для карток з ЛС

  const LS_KEY = 'favoritesList';
  const favorites = document.querySelector('.favorites-box');
  const paragraph = document.querySelector('.favorites-box-deskription');
  let favBox = [];

  function createCards() {
    try {
      const save = localStorage.getItem(LS_KEY);
      if (save) {
        paragraph.style.display = 'none';
        favBox = JSON.parse(save);
        favBox.forEach(item => {
          const exerciseCard = document.createElement('ul');
          exerciseCard.classList.add('galary-list');

          exerciseCard.innerHTML = `
<li class="exercise-item">
  <div class="exercise-item-wrapper">
    <div class="exercise-item-firth-wrapper">
      <p class="exercise-item-workout">${item.exerciseName}</p>
      <button type="button" class="button favourite-delete-button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 32 32"
          class="exercise-item-trash"
        >
          <use xlink:href="./img/icon-sprite.svg#trash"></use>
        </svg>
      </button>
      <button type="button" class="exercise-item-button" id="${item.id}">
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
          Burned calories:<span class="information-text-span"
            >${item.exerciseBurned}
          </span>
        </p>
      </li>
      <li class="exercise-item-list-information">
        <p class="information-text">
          Body part:<span class="information-text-span"
            >${item.exercisePart}</span
          >
        </p>
      </li>
      <li class="exercise-item-list-information">
        <p class="information-text">
          Target:<span class="information-text-span"
            >${item.exerciseTrget}</span
          >
        </p>
      </li>
    </ul>
  </div>
</li>
          `;

          favorites.appendChild(exerciseCard);
        });
      } else {
        paragraph.style.display = 'block';
      }
    } catch (error) {
      console.error(error);
    }
  }

  createCards();
});

// Видалення картки
const deleteButtons = document.querySelectorAll('.favourite-delete-button');
deleteButtons.forEach(button => {
  button.addEventListener('click', handleDelete);
});

function handleDelete(event) {}
