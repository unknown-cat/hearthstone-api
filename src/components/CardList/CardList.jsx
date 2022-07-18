import React, { useContext } from 'react';

import { Card } from '../../components';
import { CardsContext } from '../../context/cardsContext';

import s from './cardList.module.css';

const CardList = () => {
  const { cards } = useContext(CardsContext);

  if (cards.length < 1) {
    return <h1 style={{ textAlign: 'center' }}>Oops it is empty!</h1>;
  }

  return (
    <section className={s.cardList}>
      {cards?.map(({ ...props }) => (
        <Card key={props.cardId} props={props} />
      ))}
    </section>
  );
};

export default CardList;
