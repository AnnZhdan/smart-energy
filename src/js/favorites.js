const addToFavoritesButton = document.getElementById('additionalButton1');
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

  const existingExerciseIndex = favoritesList.findIndex((item) => item.exerciseName === modalName);
  if (existingExerciseIndex !== -1) {
    favoritesList.splice(existingExerciseIndex, 1);
    localStorage.setItem('favoritesList', JSON.stringify(favoritesList));
    alert('Exercise removed from favorites!');
  } else {
    favoritesList.push({ exerciseName: modalName, exerciseDescription: modalDescription, exerciseBurned: modalBurned, exercisePart: modalPart, exerciseEquipment: modalEquipment, exerciseTrget: modalTarget, exercisePopularity: modalPopularity, exerciseRating: modalRating });
    localStorage.setItem('favoritesList', JSON.stringify(favoritesList));
    alert('Exercise added to favorites!');
  }

  console.log('Exercise ID:', exerciseID); 
  console.log('Exercise Name:', modalName);
  console.log('Exercise Description:', modalDescription);
  console.log('Favorites List:', favoritesList);
});

