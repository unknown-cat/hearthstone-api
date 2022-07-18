import { createContext, useState, useEffect } from 'react';
import { getData, SEARCH_CARDS_API_URL } from '../api/api';

export const CardsContext = createContext({
  cards: [],
});

export const CardsProvider = ({ children }) => {
  const [cards, setCards] = useState([]);
  const [submittedQuery, setSubmittedQuery] = useState('');
  const value = { cards, setCards, submittedQuery, setSubmittedQuery };

  useEffect(() => {
    const getCardsArray = async () => {
      try {
        const cardsArray = await getData(
          `${SEARCH_CARDS_API_URL}${submittedQuery}`
        );
        setCards(cardsArray.filter((c) => c.img));
      } catch (err) {
        return setCards([]);
      }
    };

    getCardsArray();
  }, [submittedQuery]);

  return (
    <CardsContext.Provider value={value}>{children}</CardsContext.Provider>
  );
};
