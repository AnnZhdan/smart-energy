const ratingForm = document.getElementById('ratingForm');
const submitRatingButton = document.getElementById('submitRatingButton');
const selectedRat = document.getElementById('selectedRat');
const emailInput = document.getElementById('emailInput'); 
const commentInput = document.getElementById('commentInput'); 

ratingForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const exerciseID = '64f389465ae26083f39b17df'; 
  const rate = parseFloat(selectedRat.textContent); 
  const email = emailInput.value; 
  const comment = commentInput.value; 

  if (!email) {
    alert('The email field is required');
    return;
  }

  console.log('Exercise ID:', exerciseID);
  console.log('Rate:', rate);
  console.log('Email:', email);
  console.log('Comment:', comment);

  const url = `https://your-energy.b.goit.study/api/exercises/${exerciseID}/rating`;

  fetch(url, {
    method: 'PATCH',
    body: JSON.stringify({ rate, email, comment }),
    headers: {
      'Content-Type': 'application/json',
    },
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