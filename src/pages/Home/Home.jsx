import React, { useState } from 'react';

import { useSearchParams } from 'react-router-dom';

import { SearchForm, CardList } from '../../components';

import { useGetCardsQuery } from '../../services/cardsApi';

import s from './home.module.css';

const Home = () => {
  const [searchParams] = useSearchParams();
  const [submittedQuery, setSubmittedQuery] = useState(
    searchParams.get('search') || ''
  );
  const { data = [], isFetching, error } = useGetCardsQuery(submittedQuery);

  return (
    <main className={s.main}>
      <SearchForm setSubmittedQuery={setSubmittedQuery} />
      <CardList cards={data} isLoading={isFetching} error={error} />
    </main>
  );
};

export default Home;
