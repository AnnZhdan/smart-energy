document.addEventListener("DOMContentLoaded", function() {
  const addToFavoritesButton = document.getElementById('additionalButton1');
  const myModal = document.getElementById('myModal');

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
    
    let favoritesList = JSON.parse(localStorage.getItem('favoritesList')) || [];

    const existingExercise = favoritesList.find(
      (item) => item.exerciseName === exerciseData.exerciseName
    );

    if (existingExercise) {
      favoritesList = favoritesList.filter(
        (item) => item.exerciseName !== exerciseData.exerciseName
      );
      alert('Exercise removed from favorites!');
    } else {
      favoritesList.push(exerciseData);
      alert('Exercise added to favorites!');
    }

    localStorage.setItem('favoritesList', JSON.stringify(favoritesList));
  });
});