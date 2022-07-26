import React from 'react';

import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

import cardBack from '../../assets/card-back.png';

import s from './card.module.css';

const Card = ({ props: { name, img, cardId, cardSet } }) => {
  return (
    <article className={s.card}>
      <Link to={`/cards/${cardId}`}>
        <img src={img || cardBack} alt={name} />
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

Card.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  cardId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  cardSet: PropTypes.string.isRequired,
};

Card.defaultProps = {
  name: 'default name',
  cardId: '',
  img: cardBack,
  cardSet: 'default card set',
};

export default Card;
