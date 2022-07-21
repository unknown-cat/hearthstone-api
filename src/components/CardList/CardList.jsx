import React from 'react';

import { Card } from '../../components';

import s from './cardList.module.css';

const CardList = ({ cards, isLoading }) => {
  if (cards < 1) {
    return (
      <h2 style={{ textAlign: 'center' }}>
        {isLoading ? <code>Loading...</code> : <span>Search Your Card</span>}
      </h2>
    );
  }

  return (
    <section className={s.cardList}>
      {cards.map(({ ...props }) => (
        <Card key={props.cardId} props={props} />
      ))}
    </section>
  );
};

export default CardList;
