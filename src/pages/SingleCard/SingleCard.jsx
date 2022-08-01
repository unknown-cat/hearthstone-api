import React from 'react';

import { useParams } from 'react-router-dom';

import { useGetCardQuery } from '../../services/cardsApi';

import { Button } from '../../components';

import { useDispatch, useSelector } from 'react-redux';

import { toggleFavoriteCard } from '../../features/user/userSlice';

import cardBack from '../../assets/card-back.png';

import s from './singleCard.module.css';

const SingleCard = () => {
  const { cardId } = useParams();
  const { data = [], isLoading } = useGetCardQuery(cardId);
  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const isExist = user.favorites?.some((i) => i.cardId === cardId);

  if (isLoading) return <h2 style={{ textAlign: 'center' }}>Loading...</h2>;

  const { img, name } = data[0];

  const handleToggleClick = () => {
    dispatch(toggleFavoriteCard({ ...data[0] }));
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
        <Button onClick={handleToggleClick}>
          {!isExist ? 'add' : 'remove'}
        </Button>
      </section>
    </article>
  );
};

export default SingleCard;
