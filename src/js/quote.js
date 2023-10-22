import { getQuoteOfTheDay } from './api'

const box = document.querySelector('.qoute-container');
const LOCAL_STORAGE_KEY = 'quote';

getQuote();

async function getQuote() {
    try {
        const data = await getQuoteOfTheDay(); 
    console.log(data);
        createQuote(data);
        saveToLocalStorage(data);
    } catch (e) {
        console.log(e.message);
    }
}

