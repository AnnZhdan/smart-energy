import { fetchFilters } from './api.js';
(() => {
  const $root = document.querySelector('section.galary');
  if (!$root) {
    return;
  }

  console.log(window.innerWidth);

  const listGallery = document.querySelector('.galary-list');
  const bodyPartsBtn = document.querySelector('.galary-filters-button1');
  const musclesBtn = document.querySelector('.galary-filters-button2');
  const equipmentBtn = document.querySelector('.galary-filters-button3');
  const listPaginationBtn = document.querySelector('.pagination');
  const titleSpan = document.querySelector('.galary-title2 span');
  const listExersice = document.querySelector('.galary-list');
  const filtersEx = document.querySelector('.galary-title-and-list-wrapper-ex');
  const filtersBp = document.querySelector('.galary-title-and-list-wrapper');
  let totalPages = 1;
  let filter = 'Body parts';
  let currentFilterBtn = bodyPartsBtn;
  let pgntPageBtn = listPaginationBtn.children[0].firstElementChild;
  let perPage = 9;

  const screenWidth = window.screen.availWidth;

  function setPerPage() {
    if (screenWidth >= 768) {
      return (perPage = 12);
    }
  }

  setPerPage();

  drawCurrentFilterPage(filter, 1, perPage);
  listPaginationBtn.classList.add('is-hidden');

  bodyPartsBtn.addEventListener('click', handlClick);
  musclesBtn.addEventListener('click', handlClick);
  equipmentBtn.addEventListener('click', handlClick);

  function handlClick(event) {
    event.preventDefault();
    currentFilterBtn.classList.remove('galary-filter-checked');
    filter = String(this.textContent);
    this.classList.add('galary-filter-checked');
    drawCurrentFilterPage(filter, 1, perPage);
    currentFilterBtn = this;
  }

  function drawCurrentFilterPage(currentFilters, page, limit) {
    listPaginationBtn.classList.add('is-hidden');
    listGallery.innerHTML = '';
    fetchFilters(currentFilters, page, limit).then(currentFilters => {
      if (currentFilters) {
        listGallery.insertAdjacentHTML(
          'beforeend',
          createMarkUp(currentFilters.results)
        );

        switch (currentFilters.totalPages) {
          case 1:
            listPaginationBtn.classList.remove('is-hidden');
            listPaginationBtn.children[1].classList.add('is-hidden');
            listPaginationBtn.children[2].classList.add('is-hidden');
            break;

          case 2:
            listPaginationBtn.classList.remove('is-hidden');
            listPaginationBtn.children[1].classList.remove('is-hidden');
            listPaginationBtn.children[2].classList.add('is-hidden');
            break;
          case 3:
            listPaginationBtn.classList.remove('is-hidden');
            listPaginationBtn.children[1].classList.remove('is-hidden');
            listPaginationBtn.children[2].classList.remove('is-hidden');
            break;

          default:
            console.log('Something is wrong!');
        }
      }
    });

    function createMarkUp(arr) {
      return arr
        .map(
          ({ filter, name, imgURL }) => `
           <li class="galary-item">
              <img
                src="${imgURL}"
                alt="${name}"
                loading="lazy"
                class="galary-item-img"
              />
              <h3 class="galary-item-subtitle">${currentFilters}</h3>
              <p class="galery-item-text">${
                name.charAt(0).toUpperCase() + name.slice(1)
              }</p>
            </li> `
        )
        .join('');
    }
  }

  listPaginationBtn.children[0].addEventListener('click', onClickPagination);
  listPaginationBtn.children[1].addEventListener('click', onClickPagination);
  listPaginationBtn.children[2].addEventListener('click', onClickPagination);

  function onClickPagination(event) {
    if (this.firstElementChild.classList !== pgntPageBtn.classList) {
      this.firstElementChild.classList.add('current-page');
      pgntPageBtn.classList.remove('current-page');
      pgntPageBtn = this.firstElementChild;

      let page = Number(pgntPageBtn.textContent);
      console.log(page);
      drawCurrentFilterPage(filter, page);
    }
  }

  listGallery.addEventListener('click', selectExercise);

  function selectExercise(event) {
    listGallery.innerHTML = '';
    fetchExercisesByFiltersAndKeyword('back', 1, perPage);
  }

  // exersices

  async function fetchExercisesByFiltersAndKeyword(category, page, limit) {
    try {
      const apiUrl = `https://your-energy.b.goit.study/api/exercises?category=${category}&page=${page}&limit=${limit}`;

      const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      const data = await response.json();

      if (!data.results || data.results.length === 0) {
        console.log('No results found for your search parameters.');
        return;
      }
      filtersEx.classList.remove('is-hidden');
      filtersBp.classList.add('is-hidden');
      listExersice.insertAdjacentHTML(
        'beforeend',
        exCreateMarkUp(data.results)
      );
      titleSpan.textContent = `${category}`;
    } catch (error) {
      console.error(`Error: ${error.message}`);
    }
  }

  function exCreateMarkUp(arr) {
    return arr
      .map(
        ({ name, target, rating, burnedCalories, time, id, bodyPart }) => `
               <li class="exercise-item">
          <div class="exercise-item-wrapper">
            <div class="exercise-item-firth-wrapper">
              <p class="exercise-item-workout">WORKOUT</p>
              <p class="exercise-item-rating">${rating}</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 100 130"
                class="exercise-item-star"
              >
                <use href="./img/icon-sprite.svg#icon-Star-2"></use>
              </svg>
              <button type="button" class="exercise-item-button" id="${id}">
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
              <h3 class="exercise-item-subtitle">${name}</h3>
            </div>
            <ul class="exercise-item-list">
              <li class="exercise-item-list-information">
                <p class="information-text">
                  Burned calories:<span class="information-text-span"
                    >${burnedCalories} / ${time} min</span
                  >
                </p>
              </li>
              <li class="exercise-item-list-information">
                <p class="information-text">
                  Body part:<span class="information-text-span">${bodyPart}</span>
                </p>
              </li>
              <li class="exercise-item-list-information">
                <p class="information-text">
                  Target:<span class="information-text-span">${target}</span>
                </p>
              </li>
            </ul>
          </div>
        </li>
         `
      )
      .join('');
  }
})();
