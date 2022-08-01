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
  },
});

export const { loginUser, logoutUser, addUser, toggleFavoriteCard } =
  userSlice.actions;

export default userSlice.reducer;
