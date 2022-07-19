import React from 'react';

import { Card } from '../../components';

import s from './cardList.module.css';

const CardList = ({ cards }) => {
  if (cards.message) {
    return <h1 style={{ textAlign: 'center' }}>{cards.message}</h1>;
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
