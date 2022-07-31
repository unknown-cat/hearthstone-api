import React from 'react';

import { Navigate } from 'react-router-dom';

import { CardList } from '../../components';

import { useSelector } from 'react-redux';

const Favorites = () => {
  const { user } = useSelector((store) => store.user);

  if (!user.name || user.guest) {
    return <Navigate to='/' replace />;
  }

  return <CardList cards={user.favorites} favorites={true} isLoading={false} />;
};

export default Favorites;
