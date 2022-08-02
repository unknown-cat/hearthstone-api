import React from 'react';

import { CardList } from '../../components';

import { useSelector } from 'react-redux';

const Favorites = () => {
  const { user } = useSelector((store) => store.user);

  return <CardList cards={user.favorites} favorites={true} isLoading={false} />;
};

export default Favorites;
