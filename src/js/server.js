const ratingForm = document.getElementById('ratingForm');
const submitRatingButton = document.getElementById('submitRatingButton');

ratingForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(ratingForm);

  fetch('url', {
    method: 'POST',
    body: formData
  })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        myModal2.style.display = 'none';
      } else {
        alert(data.message);
      }
    })
    .catch(error => {
      console.error('Помилка:', error);
    });
});