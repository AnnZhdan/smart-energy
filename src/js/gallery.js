import { fetchFilters } from './api.js';
(() => {
  const $root = document.querySelector('section.galary');
  if (!$root) {
    return;
  }
  console.log('gggaaarrl');
  const listGallery = document.querySelector('.galary-list');
  const bodyPartsBtn = document.querySelector('.galary-filters-button1');
  const musclesBtn = document.querySelector('.galary-filters-button2');
  const equipmentBtn = document.querySelector('.galary-filters-button3');
  const listPaginationBtn = document.querySelector('.pagination');

  let totalPages = 1;
  let qPage = 1;
  let filter = 'Body parts';
  let currentFilterBtn = bodyPartsBtn;
  let pgntPageBtn = listPaginationBtn.children[0].firstElementChild;
  drawCurrentFilterPage(filter, 1);

  bodyPartsBtn.addEventListener('click', handlClick);

  musclesBtn.addEventListener('click', handlClick);

  equipmentBtn.addEventListener('click', handlClick);

  function handlClick(event) {
    event.preventDefault();
    currentFilterBtn.classList.remove('galary-filter-checked');
    filter = String(this.textContent);
    this.classList.add('galary-filter-checked');
    drawCurrentFilterPage(filter, 1);
    currentFilterBtn = this;
  }

  function drawCurrentFilterPage(currentFilters, page) {
    listGallery.innerHTML = '';
    fetchFilters(currentFilters, page, 12).then(currentFilters => {
      console.log(currentFilters);
      if (currentFilters) {
        listGallery.insertAdjacentHTML(
          'beforeend',
          createMarkUp(currentFilters.results)
        );
        // drawPaginationBtn(currentFilters.totalPages);
        switch (currentFilters.totalPages) {
          case 1:
            listPaginationBtn.children[1].classList.add('is-hidden');
            listPaginationBtn.children[2].classList.add('is-hidden');
            break;

          case 2:
            listPaginationBtn.children[1].classList.remove('is-hidden');
            listPaginationBtn.children[2].classList.add('is-hidden');
            break;
          case 3:
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
              <h3 class="galary-item-subtitle">"${currentFilters}"</h3>
              <p class="galery-item-text">"${name}"</p>
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

  // пагінація

  //   function drawPaginationBtn(qntBtn) {
  //     listPaginationBtn.innerHTML = '';

  //     let stringBtn = '';
  //     for (let i = 1; i <= qntBtn; i = i + 1) {
  //       if (qPage === i) {
  //         stringBtn =
  //           stringBtn +
  //           `<li>
  //         <button type="button" class="pagination-button current-page">${i}</button>
  //       </li>`;
  //       } else {
  //         stringBtn =
  //           stringBtn +
  //           `<li>
  //         <button type="button" class="pagination-button ">${i}</button>
  //       </li>`;
  //       }
  //     }
  //     console.log(stringBtn);
  //     listPaginationBtn.insertAdjacentHTML('beforeend', stringBtn);
  //   }
})();
