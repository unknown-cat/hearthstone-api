import { createSlice } from '@reduxjs/toolkit';

import { getUserFromLocalStorage, currenDate } from '../../utils/utils';

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
    toggleFavoriteCard: (state, { payload }) => {
      const { cardId } = payload;
      const card = state.user.favorites?.find((i) => i.cardId === cardId);

      if (!card) {
        state.user.favorites?.push(payload);
      } else {
        state.user.favorites = state.user.favorites?.filter(
          (i) => i.cardId !== cardId
        );
      }
    },
    addToHistory: (state, { payload }) => {
      state.user.history.push(payload + currenDate());
    },
  },
});

export const {
  loginUser,
  logoutUser,
  addUser,
  toggleFavoriteCard,
  addToHistory,
} = userSlice.actions;

export default userSlice.reducer;
