import {
  loginUser,
  logoutUser,
  addUser,
  addFavoriteCard,
  removeCardFromFavorites,
} from './features/user/userSlice';

import { getUserFromLocalStorage } from './utils/utils';

export const localstorageMiddleware = (store) => (next) => (action) => {
  const userData = store.getState().user.user;

  if (loginUser.match(action) && userData.name) {
    localStorage.setItem('user', JSON.stringify({ ...userData, guest: false }));
  }

  if (logoutUser.match(action)) {
    localStorage.setItem('user', JSON.stringify({ ...userData, guest: true }));
  }

  if (addUser.match(action)) {
    const { payload } = action;
    localStorage.setItem('user', JSON.stringify(payload));
  }

  if (removeCardFromFavorites.match(action)) {
    const userData = getUserFromLocalStorage();
    const { cardId } = action.payload;
    const filteredCards = userData.favorites?.filter(
      (i) => i.cardId !== cardId
    );
    userData.favorites = filteredCards;

    localStorage.setItem('user', JSON.stringify(userData));
  }

  if (addFavoriteCard.match(action)) {
    const userData = getUserFromLocalStorage();
    const { cardId } = action.payload;

    if (userData.favorites < 1) userData.favorites.push(action.payload);

    const cardData = userData.favorites?.find((i) => i.cardId === cardId);

    if (!cardData) userData.favorites?.push(action.payload);

    localStorage.setItem('user', JSON.stringify(userData));
  }

  return next(action);
};
