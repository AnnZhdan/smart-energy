import { getQuoteOfTheDay } from './api.js';



const LOCAL_STORAGE_KEY = 'quote';
const box = document.querySelector('.qoute-inside-container');



async function getQuote() {
  const quotePerDay = await getQuoteOfTheDay();
  console.log(quotePerDay);

  if (!quotePerDay || !quotePerDay.quote || !quotePerDay.author) {
    throw new Error('Invalid data received from the server');
  }

  createMarkup(quotePerDay);
  saveToLocalStorage(quotePerDay);

  return quotePerDay;
}

try {
  const quoteResult = getQuote();
  
} catch (error) {
  console.log(error.message);
 
}

function createMarkup({ quote, author }) {
    box.innerHTML = `
        
        <p class="quotes-day-text">${quote}</p>
        <p class="quotes-day-author">${author}</p>
    `;
}

function saveToLocalStorage({ quote, author }) {
    const info = {
        quote,
        author,
        date: new Date().getDate(),
    };
    try {
        const infoJson = JSON.stringify(info);
        localStorage.setItem(LOCAL_STORAGE_KEY, infoJson);
    } catch (e) {
        console.log(e.message);
      
    }
}

async function checkQuoteInLocalStorage() {
    try {
        const savedQuote = localStorage.getItem(LOCAL_STORAGE_KEY);

        if (savedQuote) {
            let parsedData = JSON.parse(savedQuote);
            let currentDate = new Date().getDate();

            if (parsedData.date !== currentDate) {
                await getQuote();
            }
        }
    } catch (e) {
        console.log(e.message);
    }
}

checkQuoteInLocalStorage();
