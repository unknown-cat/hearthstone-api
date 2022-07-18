import React from 'react';

import { Link } from 'react-router-dom';

import cardBack from '../../assets/card-back.png';

import s from './card.module.css';

const Card = ({ props: { name, img, cardId, cardSet } }) => {
  return (
    <article className={s.card}>
      <Link to={`/cards/${cardId}`}>
        <img src={img ? img : cardBack} alt={name} />
        {!img && (
          <section className={s.section}>
            <p>{name}</p>
            <p>{cardSet}</p>
          </section>
        )}
      </Link>
    </article>
  );
};

export default Card;
