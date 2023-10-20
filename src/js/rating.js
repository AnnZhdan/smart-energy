const ratingLabels = document.querySelectorAll('.rating-container label');
const starImages = document.querySelectorAll('.rating-container label svg use');

ratingLabels.forEach((label, index) => {
  label.addEventListener('click', (event) => {
    starImages.forEach((image, i) => {
      if (i <= index) {
        image.setAttribute('xlink:href', './img/icon-sprite.svg#icon-Star-2');
      } else {
        image.setAttribute('xlink:href', './img/icon-sprite.svg#icon-Star-1');
      }
    });
  });

  label.addEventListener('focus', (event) => {
    starImages[index].setAttribute('xlink:href', './img/icon-sprite.svg#icon-Star-2');
  });

  label.addEventListener('blur', (event) => {
    starImages[index].setAttribute('xlink:href', './img/icon-sprite.svg#icon-Star-1');
  });
});