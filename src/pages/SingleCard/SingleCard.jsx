import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getData, SINGLE_CARD_API_URL } from '../../api/api';

import s from './singleCard.module.css';

const SingleCard = () => {
  const { cardId } = useParams();
  const [singleCard, setSingleCard] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getCard = async () => {
      const cardData = await getData(`${SINGLE_CARD_API_URL}${cardId}`);
      setSingleCard(cardData[0]);
      setIsLoading(false);
    };

    getCard();
  }, [cardId]);

  if (isLoading) return <h2 style={{ textAlign: 'center' }}>Loading...</h2>;

  const { artist, cardSet, img, name, rarity, type, faction } = singleCard;

  return (
    <article className={s.singleCard}>
      <img src={img} alt={name} />
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
