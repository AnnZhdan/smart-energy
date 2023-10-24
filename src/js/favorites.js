let isFavorite = false;
let favoritesText;
let favoritesIcon;

document.addEventListener("DOMContentLoaded", function() {
  favoritesText = document.getElementById('favoritesText'); 
  favoritesIcon = document.getElementById('favoritesIcon');

  const addToFavoritesButton = document.getElementById('additionalButton1');
  const myModal = document.querySelector('.modal');

  addToFavoritesButton.addEventListener('click', () => {
    const exerciseID = addToFavoritesButton.getAttribute('data-exercise-id');
    const modalName = document.querySelector('.title-modal').textContent;
    const modalDescription = document.querySelector('.text-modal').textContent;
    const modalBurned = myModal.querySelector('.burn-modal').textContent;
    const modalRating = myModal.querySelector('.modal-rating').textContent;
    const modalPart = myModal.querySelector('.modal-part').textContent;
    const modalEquipment = myModal.querySelector('.modal-equipment').textContent;
    const modalTarget = myModal.querySelector('.modal-target').textContent;
    const modalPopularity = myModal.querySelector('.modal-popularity').textContent;

    let favoritesList = JSON.parse(localStorage.getItem('favoritesList')) || [];

    const existingExerciseIndex = favoritesList.findIndex((item) => item.exerciseID === exerciseID);

    if (existingExerciseIndex !== -1) {
      favoritesList.splice(existingExerciseIndex, 1);
      localStorage.setItem('favoritesList', JSON.stringify(favoritesList));
      alert('Exercise removed from favorites!');
    } else {
      favoritesList.push({
        exerciseID: exerciseID,
        exerciseName: modalName,
        exerciseDescription: modalDescription,
        exerciseBurned: modalBurned,
        exercisePart: modalPart,
        exerciseEquipment: modalEquipment,
        exerciseTarget: modalTarget,
        exercisePopularity: modalPopularity,
        exerciseRating: modalRating
      });
      localStorage.setItem('favoritesList', JSON.stringify(favoritesList));
      alert('Exercise added to favorites!');
    }

  });

  additionalButton1.addEventListener('click', () => {
    try {
      if (favoritesText) {
        favoritesText.textContent = 'Add to favorites';
      }
      if (favoritesIcon) {
        favoritesIcon.setAttribute('xlink:href', './img/icon-sprite.svg#heart');
      }
    } catch (error) {
      console.error('Error while updating favorites:', error);
    }

    isFavorite = !isFavorite;
  });
});