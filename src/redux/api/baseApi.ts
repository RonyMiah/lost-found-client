import { axiosBaseQuery } from '@/helpars/axios/axiosBaseQuery';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
//customize baseQuery Axios
export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: axiosBaseQuery({
    baseUrl: 'https://lost-found-server.vercel.app/api/v1',
  }),
  endpoints: () => ({}),
  tagTypes: ['user', 'lost', 'found', 'claim', 'meta'],
});
