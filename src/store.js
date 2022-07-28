import { configureStore } from '@reduxjs/toolkit';

import userReducer from './features/user/userSlice';

import { cardsApi } from './services/cardsApi';

import { authMiddleware } from './authMiddleware';

export const store = configureStore({
  reducer: {
    user: userReducer,
    [cardsApi.reducerPath]: cardsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([cardsApi.middleware]).concat(authMiddleware),
});
