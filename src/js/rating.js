const ratingLabels = document.querySelectorAll('.rating-container label');
const starImages = document.querySelectorAll('.rating-container label svg use');

ratingLabels.forEach((label, index) => {
  label.addEventListener('click', event => {
    for (let i = 0; i < ratingLabels.length; i++) {
      if (i <= index) {
        starImages[i].setAttribute(
          'href',
          '/img/icon-sprite.svg#icon-Star-2'
        );
      } else {
        starImages[i].setAttribute(
          'href',
          '/img/icon-sprite.svg#icon-Star-1'
        );
      }
    }
  });

  label.addEventListener('focus', event => {
    for (let i = 0; i <= index; i++) {
      starImages[i].setAttribute(
        'href',
        '/img/icon-sprite.svg#icon-Star-2'
      );
    }
    for (let i = index + 1; i < ratingLabels.length; i++) {
      starImages[i].setAttribute(
        'href',
        '/img/icon-sprite.svg#icon-Star-1'
      );
    }
  });

  label.addEventListener('blur', event => {
    for (let i = 0; i < ratingLabels.length; i++) {
      starImages[i].setAttribute(
        'href',
        '/img/icon-sprite.svg#icon-Star-1'
      );
    }
  });
});

const selectedRating = document.getElementById('selectedRat');

ratingLabels.forEach((label, index) => {
  label.addEventListener('click', event => {
    const ratingValue = (index + 1).toFixed(1);
    selectedRating.textContent = ratingValue;
  });
});