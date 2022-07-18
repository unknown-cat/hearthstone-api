const options = {
  method: 'GET',
  headers: {
    'Content-type': 'application/json',
    'X-RapidAPI-Key': process.env.REACT_APP_HEARTHSTONE_API,
    'X-RapidAPI-Host': 'omgvamp-hearthstone-v1.p.rapidapi.com',
  },
};

export const SEARCH_CARDS_API_URL = `https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/search/`;
export const SINGLE_CARD_API_URL = 'https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/';

export const getData = async (url) => {
  try {
    const res = await fetch(url, options);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
};
