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
  }),
});

export const { useCrateFoundItemMutation } = extendedApi;
