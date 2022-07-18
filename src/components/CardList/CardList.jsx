import React from 'react';

import { Card } from '../../components';

import s from './cardList.module.css';

const CardList = ({ cards }) => {
  if (cards.length < 1) {
    return <h1 style={{ textAlign: 'center' }}>Oops it is empty!</h1>;
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
