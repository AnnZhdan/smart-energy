// import throttle from 'lodash.throttle';

function sendDataToBackend(event) {
  event.preventDefault(); 

    const email = document.getElementById('mailto').value;

  
  fetch('https://your-energy.b.goit.study/api/subscription', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: email })
  })
  .then(response => {
      if (response.ok) {
          alert('Дані успішно відправлені');
      } else {
          alert('Під час відправлення сталася помилка');
      }
  })
  .catch(error => {
      console.error('Помилка:', error);
  });
}
