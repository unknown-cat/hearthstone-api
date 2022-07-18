import React, { useState, useEffect } from 'react';

import { SearchForm, CardList } from '../../components';

import { getData, SEARCH_CARDS_API_URL } from '../../api/api';

import s from './home.module.css';

const Home = () => {
  const [submittedQuery, setSubmittedQuery] = useState('');
  const [cards, setCards] = useState([]);

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
    <main className={s.main}>
      <SearchForm setSubmittedQuery={setSubmittedQuery} />
      <CardList cards={cards} />
    </main>
  );
};

export default Home;
