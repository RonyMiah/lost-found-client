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

    getAllLostItems: build.query({
      query: (query: Record<string, any>) => ({
        url: '/property/getall-lost-items',
        method: 'GET',
        params: query,
      }),
      providesTags: ['lost'],
    }),

    getMyLostItems: build.query({
      query: () => ({
        url: '/property/my-lost-items',
        method: 'GET',
      }),
      providesTags: ['lost'],
    }),

    getSingleLostItems: build.query({
      query: (id: string) => {
        console.log(id);
        return {
          url: `/property/getsingle-lost-items/${id}`,
          method: 'GET',
        };
      },
      providesTags: ['lost'],
    }),

    updateLostItems: build.mutation({
      query: (obj) => ({
        url: `/property/update-lost-items/${obj.id}`,
        method: 'PATCH',
        data: obj.data,
      }),
      invalidatesTags: ['lost'],
    }),
    deleteLostItems: build.mutation({
      query: (id) => ({
        url: `/property/update-lost-items/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['lost'],
    }),
  }),
});

export const {
  useCreateLostItemMutation,
  useGetMyLostItemsQuery,
  useGetSingleLostItemsQuery,
  useUpdateLostItemsMutation,
  useDeleteLostItemsMutation,
  useGetAllLostItemsQuery,
} = extendedApi;
