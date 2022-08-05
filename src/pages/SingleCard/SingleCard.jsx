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
  const { user } = useSelector((store) => store.user);
  const { data: cardData = [], isLoading } = useGetCardQuery(cardId);
  const dispatch = useDispatch();

  const isExist = user.favorites?.some((i) => i.cardId === cardId);

  if (isLoading) return <h2 style={{ textAlign: 'center' }}>Loading...</h2>;

  const { 'Image url': img, Name } = cardData;

  const handleToggleClick = () => dispatch(toggleFavoriteCard(cardData));

  return (
    <article className={s.singleCard}>
      <img src={img ? img : cardBack} alt={Name} />

      <section className={s.description}>
        {Object.entries(cardData).map(([key, value]) => {
          const valueExistAndNotImageUrl = value && key !== 'Image url';

          return (
            valueExistAndNotImageUrl && (
              <p className={s.text} key={key}>
                <span>{key}:</span> {value}
              </p>
            )
          );
        })}

        {user.favorites && (
          <Button onClick={handleToggleClick}>
            {!isExist ? 'add' : 'remove'}
          </Button>
        )}
      </section>
    </article>
  );
};

export default SingleCard;
