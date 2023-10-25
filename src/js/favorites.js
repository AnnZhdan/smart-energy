import Notiflix from "notiflix";

document.addEventListener("DOMContentLoaded", function () {
  const addToFavoritesButton = document.getElementById('additionalButton1');
  const myModal = document.getElementById('myModal');

  let favoritesList = JSON.parse(localStorage.getItem('favoritesList')) || [];

  addToFavoritesButton.addEventListener('click', () => {
    const exerciseData = {
      exerciseID: addToFavoritesButton.getAttribute('data-exercise-id'),
      exerciseName: myModal.querySelector('.title-modal').textContent,
      exerciseDescription: myModal.querySelector('.text-modal').textContent,
      exerciseBurned: myModal.querySelector('.burn-modal').textContent,
      exerciseRating: myModal.querySelector('.modal-rating').textContent,
      exercisePart: myModal.querySelector('.modal-part').textContent,
      exerciseEquipment: myModal.querySelector('.modal-equipment').textContent,
      exerciseTarget: myModal.querySelector('.modal-target').textContent,
      exercisePopularity: myModal.querySelector('.modal-popularity').textContent
    };
    
    const existingExercise = favoritesList.find(
      (item) => item.exerciseName === exerciseData.exerciseName
    );

    if (existingExercise) {
      favoritesList = favoritesList.filter(
        (item) => item.exerciseName !== exerciseData.exerciseName
      );
      Notiflix.Notify.success('Exercise removed from favorites!');
      
      addToFavoritesButton.querySelector('.button-name-favorites').textContent = 'Add to favorites';
      addToFavoritesButton.querySelector('.favorites-svg use').setAttribute('href', '/img/icon-sprite.svg#heart');
    } else {
      favoritesList.push(exerciseData);
      Notiflix.Notify.success('Exercise added to favorites!');
      
      addToFavoritesButton.querySelector('.button-name-favorites').textContent = 'Remove from favorites';
      addToFavoritesButton.querySelector('.favorites-svg use').setAttribute('href', '/img/icon-sprite.svg#trash');
    }

    localStorage.setItem('favoritesList', JSON.stringify(favoritesList));
  });

  const exerciseName = myModal.querySelector('.title-modal').textContent;
  const isExerciseInFavorites = favoritesList.some(
    (item) => item.exerciseName === exerciseName
  );

  if (isExerciseInFavorites) {
    addToFavoritesButton.querySelector('.button-name-favorites').textContent = 'Remove from favorites';
    addToFavoritesButton.querySelector('.favorites-svg use').setAttribute('href', '/img/icon-sprite.svg#heart-filled');
  }
});