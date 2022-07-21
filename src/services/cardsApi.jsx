import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_URL = `https://omgvamp-hearthstone-v1.p.rapidapi.com`;
const SEARCH_ENDPOINT = '/cards/search/';
const SINGLE_CARD_ENDPOINT = '/cards/';

const options = {
  method: 'GET',
  headers: {
    'Content-type': 'application/json',
    'X-RapidAPI-Key': process.env.REACT_APP_HEARTHSTONE_API,
    'X-RapidAPI-Host': 'omgvamp-hearthstone-v1.p.rapidapi.com',
  },
};

const { method, headers } = options;

export const cardsApi = createApi({
  reducerPath: 'getCardsApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getCards: builder.query({
      query: (query) => {
        return {
          url: `${SEARCH_ENDPOINT}${query}`,
          method,
          headers,
        };
      },
    }),
    getCard: builder.query({
      query: (id) => {
        return {
          url: `${SINGLE_CARD_ENDPOINT}${id}`,
          method,
          headers,
        };
      },
    }),
  }),
});

export const { useGetCardsQuery, useGetCardQuery } = cardsApi;
