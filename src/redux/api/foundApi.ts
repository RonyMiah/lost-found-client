import { baseApi } from './baseApi';

const extendedApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    crateFoundItem: build.mutation({
      query: (data) => ({
        url: '/property/create-foundproperty',
        method: 'POST',
        data: data,
      }),
      invalidatesTags: ['found'],
    }),
    getMyFoundItems: build.query({
      query: () => ({
        url: '/property/my-found-items',
        method: 'GET',
      }),
      providesTags: ['found'],
    }),
  }),
});

export const { useCrateFoundItemMutation, useGetMyFoundItemsQuery} = extendedApi;
