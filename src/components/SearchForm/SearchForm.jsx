import React from 'react';

import { useSearchParams } from 'react-router-dom';

import FormInput from '../FormInput/FormInput';

import s from './searchForm.module.css';

const SearchForm = ({ setSubmittedQuery }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchTerm = searchParams.get('search') || '';

  const handleSearch = (e) => {
    const search = e.target.value;
    if (search) {
      setSearchParams({ search: e.target.value });
    } else {
      setSearchParams({});
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedQuery(searchTerm);
  };

  return (
    <section className={s.search}>
      <form className={s.form} onSubmit={handleSubmit}>
        <FormInput
          id='name'
          className={s.input}
          type='text'
          value={searchTerm}
          onChange={handleSearch}
          placeholder='search your card'
        />
      </form>
    </section>
  );
};

export default SearchForm;
