import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CardsContext } from '../../context/cardsContext';

import styles from './singleCard.module.css';

const SingleCard = () => {
  const { cards } = useContext(CardsContext);
  const { cardId } = useParams();
  const [singleCard, setSingleCard] = useState({});

  useEffect(
    () => setSingleCard(cards.find((card) => card.cardId === cardId)),
    [cardId, cards]
  );

  const { artist, cardSet, img, name, rarity, type, faction } = singleCard;

  return (
    <article className={styles.singleCard}>
      <img src={img} alt={name} />
      <section className={styles.description}>
        <p className={styles.text}>
          <span>Artist: </span>
          {artist ? artist : 'Unknown'}
        </p>
        <p className={styles.text}>
          <span>Card Name: </span> {name}
        </p>
        <p className={styles.text}>
          <span>Type: </span>
          {type}
        </p>
        <p className={styles.text}>
          <span>Card Set: </span>
          {cardSet}
        </p>
        <p className={styles.text}>
          <span>Rarity: </span>
          {rarity ? rarity : 'Standart'}
        </p>
        <p className={styles.text}>
          <span>Faction: </span>
          {faction ? faction : null}
        </p>
      </section>
    </article>
  );
};

export default SingleCard;
