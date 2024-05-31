import { baseApi } from './baseApi';

const extendedApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createClaimItems: build.mutation({
      query: (data) => ({
        url: '/property/claim',
        method: 'POST',
        data: data,
      }),
      invalidatesTags: ['claim'],
    }),
    getClaimItems: build.query({
      query: () => ({
        url: '/property/my-claim-items',
        method: 'GET',
      }),
      providesTags: ['claim'],
    }),
  }),
});

export const { useGetClaimItemsQuery, useCreateClaimItemsMutation } = extendedApi;
