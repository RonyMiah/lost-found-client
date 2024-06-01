// meta
import { baseApi } from './baseApi';

const extendedApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllMetaData: build.query({
      query: () => ({
        url: '/meta',
        method: 'GET',
      }),
      providesTags: ['meta'],
    }),
  }),
});

export const { useGetAllMetaDataQuery } = extendedApi;
