const favoritesButton = document.getElementById('additionalButton1');
const favoritesText = favoritesButton.querySelector('.button-name-favorites');
const favoritesIcon = favoritesButton.querySelector('.favorites-svg use');

let isFavorite = false;

favoritesButton.addEventListener('click', () => {
  if (isFavorite) {
    favoritesText.textContent = 'Add to favorites';
    favoritesIcon.setAttribute('xlink:href', './img/icon-sprite.svg#heart');
  } else {
    favoritesText.textContent = 'Remove from favorites';
    favoritesIcon.setAttribute('xlink:href', './img/icon-sprite.svg#trash');
  }
  isFavorite = !isFavorite;
});
