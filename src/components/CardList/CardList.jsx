import React from 'react';

import PropTypes from 'prop-types';

import { Card } from '../../components';

import s from './cardList.module.css';

const CardList = ({ cards, isLoading, favorites, error }) => {
  const renderMessage = (
    <h2 className={s.message}>
      {isLoading && <code>Loading...</code>}
      {favorites && 'Add some Favorite cards!'}
      {error && !isLoading && error.data.message}
    </h2>
  );

  if (cards.length < 1) return renderMessage;

  const renderCards =
    !error &&
    !isLoading &&
    cards.map(({ ...props }) => <Card key={props.cardId} props={props} />);

  return (
    <>
      {renderMessage}
      <section className={s.cardList}>{renderCards}</section>
    </>
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
