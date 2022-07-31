import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import {
  addFavoriteCard,
  removeCardFromFavorites,
} from '../../features/user/userSlice';

import { Button } from '..';

import PropTypes from 'prop-types';

import cardBack from '../../assets/card-back.png';

import s from './card.module.css';

const Card = ({ props }) => {
  const { name, img, cardId, cardSet } = props;
  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const [isCardExist, setIsCardExist] = useState(false);

  const handleAddClick = () => {
    setIsCardExist(!isCardExist);
    dispatch(addFavoriteCard(props));
  };

  const handleRemoveClick = () => {
    setIsCardExist(!isCardExist);
    dispatch(removeCardFromFavorites({ cardId }));
  };

  useEffect(() => {
    const { favorites } = user;
    const isExist = favorites?.some((i) => i.cardId === cardId);
    setIsCardExist(isExist);
  }, [cardId, user]);

  const FavoritesButton = () => (
    <Button
      className={s.btn}
      onClick={isCardExist ? handleRemoveClick : handleAddClick}
    >
      {isCardExist ? '★' : '☆'}
    </Button>
  );

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
      <FavoritesButton />
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
