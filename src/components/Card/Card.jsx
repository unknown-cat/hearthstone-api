import React from 'react';

import { Link } from 'react-router-dom';

import s from './card.module.css';

const Card = ({ props: { name, img, cardId } }) => {
  return (
    <article className={s.card}>
      <Link to={`/cards/${cardId}`}>
        <img src={img} alt={name} />
      </Link>
    </article>
  );
};

export default Card;
