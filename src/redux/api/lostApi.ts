// property/create-lostproperty

import { baseApi } from './baseApi';

const extendedApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createLostItem: build.mutation({
      query: (data) => ({
        url: '/property/create-lostproperty',
        method: 'POST',
        data: data,
      }),
      invalidatesTags: ['lost'],
    }),
  }),
});

export const { useCreateLostItemMutation } = extendedApi;
