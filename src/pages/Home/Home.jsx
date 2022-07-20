import React, { useState } from 'react';

import { SearchForm, CardList } from '../../components';

import { useGetCardsQuery } from '../../services/cardsApi';

import s from './home.module.css';

const Home = () => {
  const [submittedQuery, setSubmittedQuery] = useState('');
  const { data = [], isLoading } = useGetCardsQuery(submittedQuery);

  return (
    <main className={s.main}>
      <SearchForm setSubmittedQuery={setSubmittedQuery} />
      <CardList cards={data} isLoading={isLoading} />
    </main>
  );
};

export default Home;
