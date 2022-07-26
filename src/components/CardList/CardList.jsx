import React from 'react';

import PropTypes from 'prop-types';

import { Card } from '../../components';

import s from './cardList.module.css';

const CardList = ({ cards, isLoading }) => {
  if (cards < 1) {
    return (
      <h2 style={{ textAlign: 'center' }}>
        {isLoading ? <code>Loading...</code> : <span>Search Your Card</span>}
      </h2>
    );
  }

  return (
    <section className={s.cardList}>
      {cards.map(({ ...props }) => (
        <Card key={props.cardId} props={props} />
      ))}
    </section>
  );
};

CardList.propTypes = {
  cards: PropTypes.array,
  isLoading: PropTypes.bool.isRequired,
  children: PropTypes.element,
};

CardList.defaultProps = {
  cards: [],
  isLoading: false,
};

export default CardList;
