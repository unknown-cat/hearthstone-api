import React from 'react';

import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import { toggleFavoriteCard } from '../../features/user/userSlice';

import { Button } from '..';

import PropTypes from 'prop-types';

import cardBack from '../../assets/card-back.png';

import s from './card.module.css';

const Card = ({ props }) => {
  const { name, img, cardId, cardSet, Name, Set, 'Image url': image } = props;
  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const isExist = user.favorites?.some((i) => i.cardId === cardId);

  const handleToggleClick = () => {
    dispatch(toggleFavoriteCard(props));
  };

  return (
    <article className={s.card}>
      <Link to={`/cards/${cardId}`}>
        <img src={img || image || cardBack} alt={name || Name} />
        {!img && !image && (
          <section className={s.section}>
            <p>{name || Name}</p>
            <p>{cardSet || Set}</p>
          </section>
        )}
      </Link>

      {user.favorites && (
        <Button className={s.btn} onClick={handleToggleClick}>
          {isExist ? '★' : '☆'}
        </Button>
      )}
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
