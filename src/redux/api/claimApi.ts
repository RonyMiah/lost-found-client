import { baseApi } from './baseApi';

const extendedApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getClaimItems: build.query({
      query: () => ({
        url: '/property/my-claim-items',
        method: 'GET',
      }),
      providesTags: ['claim'],
    }),
  }),
});

export const { useGetClaimItemsQuery } = extendedApi;
