///A list of filters (exercises)
export async function fetchFilters(filter, page, limit) {
  const apiUrl = `https://your-energy.b.goit.study/api/filters?filter=${filter}&page=${page}&limit=${limit}`;

  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
}

///Exercises filters and categories
async function fetchExercisesByFiltersAndKeyword(
  category,
  muscles,
  equipment,
  keyword,
  page,
  limit
) {
  try {
    const apiUrl = `https://your-energy.b.goit.study/api/exercises?category=${category}&muscles=${muscles}&equipment=${equipment}&keyword=${keyword}&page=${page}&limit=${limit}`;

    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    const data = await response.json();

    if (!data.results || data.results.length === 0) {
      console.log('No results found for your search parameters.');
      return;
    }

    data.results.forEach((exercise, index) => {
      console.log(`Exercise #${index + 1}:`);
      console.log(`Name: ${exercise.name}`);
      console.log(`Description: ${exercise.description}`);
      console.log(`GIF URL: ${exercise.gifUrl}`);
      console.log(`Burned Calories: ${exercise.burnedCalories}`);
      console.log(`Duration: ${exercise.duration} minutes`);
      console.log(`Rating: ${exercise.rating}`);
      console.log('-----------------------------------');
    });
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
}

///Exercise details
async function fetchExerciseDetails(exerciseID) {
  try {
      const apiUrl = `https://your-energy.b.goit.study/api/exercises/${exerciseID}`;
      const response = await fetch(apiUrl);

      if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
      }

      const data = await response.json();

      if (!data.results || data.results.length === 0) {
          console.log('Exercise not found for the specified exerciseID.');
          return;
      }

      const detailsContainer = document.getElementById('exercise-details');
      const exercise = data.results[0];
      detailsContainer.innerHTML = `
          <h2>${exercise.name}</h2>
          <p><strong>Body Part:</strong> ${exercise.bodyPart}</p>
          <p><strong>Equipment:</strong> ${exercise.equipment}</p>
          <p><strong>Target:</strong> ${exercise.target}</p>
          <p><strong>Description:</strong> ${exercise.description}</p>
          <p><strong>Burned Calories:</strong> ${exercise.burnedCalories}</p>
          <p><strong>Duration:</strong> ${exercise.time} minutes</p>
          <p><strong>Rating:</strong> ${exercise.rating}</p>
          <p><strong>Popularity:</strong> ${exercise.popularity}</p>
          <p><strong>GIF URL:</strong> <a href="${exercise.gifUrl}" target="_blank">View</a></p>
      `;
  } catch (error) {
      console.error(`Error: ${error.message}`);
  }
}
///Exercise rating
async function setExerciseRating(exerciseID, rating) {
  try {
      const apiUrl = `https://your-energy.b.goit.study/api/exercises/${exerciseID}/rating`;
      const requestBody = JSON.stringify({ rating });

      const response = await fetch(apiUrl, {
          method: 'PATCH',
          headers: {
              'Content-Type': 'application/json',
          },
          body: requestBody,
      });

      if (!response.ok) {
          throw new Error(`Request to set rating failed with status ${response.status}`);
      }

      const data = await response.json();

      console.log(`Rating for exercise ${exerciseID} has been updated to ${rating}.`);
  } catch (error) {
      console.error(`Error: ${error.message}`);
  }
}

///Quote of the day
export async function getQuoteOfTheDay() {
  try {
    const response = await fetch('https://your-energy.b.goit.study/api/quote');

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    if (data && data.author && data.quote) {
      console.log(`Quote of the day: "${data.quote}" - ${data.author}`);
      
      return data;
    } else {
      console.log('Failed to get the quote of the day.');
    }
  } catch (error) {
    console.error('Error while fetching the quote of the day:', error);
  }
}

///Subscription service
async function subscribeToExerciseUpdates() {
  const url = 'https://your-energy.b.goit.study/api/subscription';
  const data = {
    message: 'Service not found',
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const responseData = await response.json();

    if (responseData.message) {
      console.log(
        'Subscription successful. Received response:',
        responseData.message
      );
    } else {
      console.log('Failed to subscribe.');
    }
  } catch (error) {
    console.error('Error while subscribing:', error);
  }
}

// Usage
fetchFilters('Muscles', 1, 12).then(filters => {
  if (filters) {
    console.log(filters);
  }
});

fetchExercisesByFiltersAndKeyword('back', 'lats', 'barbell', 'pull', 1, 10);
fetchExerciseDetails('64f389465ae26083f39b17c2');
