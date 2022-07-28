import { createSlice } from '@reduxjs/toolkit';

import { getUserFromLocalStorage } from '../../utils/utils';

const initialState = {
  user: getUserFromLocalStorage(),
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUser: (state, { payload }) => {
      const { email, password } = payload;
      const { email: localEmail, password: localPassword } = state.user;
      if (email === localEmail && password === localPassword)
        state.user.guest = false;
    },
    logoutUser: (state) => (state.user.guest = true),
    addUser: (state, { payload }) => {
      state.user = payload;
    },
  },
});

export const { loginUser, logoutUser, addUser } = userSlice.actions;

export default userSlice.reducer;
