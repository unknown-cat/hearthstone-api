import React from 'react';

import { useParams } from 'react-router-dom';

import { useGetCardQuery } from '../../services/cardsApi';

import { Button } from '../../components';

import { useDispatch } from 'react-redux';

import {
  addFavoriteCard,
  removeCardFromFavorites,
} from '../../features/user/userSlice';

import cardBack from '../../assets/card-back.png';

import s from './singleCard.module.css';

const SingleCard = () => {
  const { cardId } = useParams();
  const { data = [], isLoading } = useGetCardQuery(cardId);
  const dispatch = useDispatch();

  if (isLoading) return <h2 style={{ textAlign: 'center' }}>Loading...</h2>;

  const { img, name } = data[0];

  const handleAddCardClick = (e) => {
    dispatch(addFavoriteCard(data[0]));
  };

  const handleRemoveCardClick = (e) => {
    dispatch(removeCardFromFavorites({ cardId }));
  };

  return (
    <article className={s.singleCard}>
      <img src={img ? img : cardBack} alt={name} />
      <section className={s.description}>
        {Object.entries(data[0]).map(([key, value]) => {
          if (typeof value !== 'object') {
            return (
              <p className={s.text} key={key}>
                <span>{key}:</span> {value}
              </p>
            );
          } else {
            return null;
          }
        })}
        <Button onClick={handleAddCardClick}>add</Button> {''}
        <Button onClick={handleRemoveCardClick}>remove</Button>
      </section>
    </article>
  );
};

export default SingleCard;
