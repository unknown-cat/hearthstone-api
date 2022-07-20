import { configureStore } from '@reduxjs/toolkit';

import { cardsApi } from './services/cardsApi';

export const store = configureStore({
  reducer: {
    [cardsApi.reducerPath]: cardsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cardsApi.middleware),
});
