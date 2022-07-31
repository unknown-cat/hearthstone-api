import { createSlice } from '@reduxjs/toolkit';

import { getUserFromLocalStorage } from '../../utils/utils';

const initialState = {
  user: getUserFromLocalStorage(),
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUser: (state) => {
      state.user.guest = false;
    },
    logoutUser: (state) => (state.user.guest = true),
    addUser: (state, { payload }) => {
      state.user = payload;
    },
    addFavoriteCard: (state, { payload }) => {
      const { cardId } = payload;
      const card = state.user.favorites?.find((i) => i.cardId === cardId);
      if (!card) state.user.favorites?.push(payload);
    },
    removeCardFromFavorites: (state, { payload }) => {
      const { cardId } = payload;
      const newCards = state.user.favorites?.filter((i) => i.cardId !== cardId);
      state.user.favorites = newCards;
    },
  },
});

export const {
  loginUser,
  logoutUser,
  addUser,
  addFavoriteCard,
  removeCardFromFavorites,
} = userSlice.actions;

export default userSlice.reducer;
