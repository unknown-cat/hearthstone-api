import React from 'react';

import { useParams } from 'react-router-dom';

import { useGetCardQuery } from '../../services/cardsApi';

import cardBack from '../../assets/card-back.png';

import s from './singleCard.module.css';

const SingleCard = () => {
  const { cardId } = useParams();
  const { data = [], isLoading } = useGetCardQuery(cardId);

  if (isLoading) return <h2 style={{ textAlign: 'center' }}>Loading...</h2>;

  const { artist, cardSet, img, name, rarity, type, faction } = data[0];

  return (
    <article className={s.singleCard}>
      <img src={img ? img : cardBack} alt={name} />
      <section className={s.description}>
        <p className={s.text}>
          <span>Artist: </span>
          {artist ? artist : 'Unknown'}
        </p>
        <p className={s.text}>
          <span>Card Name: </span> {name}
        </p>
        <p className={s.text}>
          <span>Type: </span>
          {type}
        </p>
        <p className={s.text}>
          <span>Card Set: </span>
          {cardSet}
        </p>
        <p className={s.text}>
          <span>Rarity: </span>
          {rarity ? rarity : 'Standart'}
        </p>
        <p className={s.text}>
          <span>Faction: </span>
          {faction ? faction : null}
        </p>
      </section>
    </article>
  );
};

export default SingleCard;
