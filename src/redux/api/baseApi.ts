import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://lost-found-server.vercel.app/api/v1',
  }),
  endpoints: () => ({}),
//   tagTypes: 
});
