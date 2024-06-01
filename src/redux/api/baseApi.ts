import { axiosBaseQuery } from '@/helpars/axios/axiosBaseQuery';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
//customize baseQuery Axios
export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: axiosBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_BACKEND_API_URL}`,
  }),
  endpoints: () => ({}),
  tagTypes: ['user', 'lost', 'found', 'claim', 'meta'],
});
