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
    getAllFoundItems: build.query({
      query: (query: Record<string, any>) => ({
        url: '/property/getall-found-items',
        method: 'GET',
        params: query,
      }),
      providesTags: ['found'],
    }),
    getMyFoundItems: build.query({
      query: () => ({
        url: '/property/my-found-items',
        method: 'GET',
      }),
      providesTags: ['found'],
    }),

    getSingleFoundItems: build.query({
      query: (id: string) => {
        console.log(id);
        return {
          url: `/property/getsingle-found-items/${id}`,
          method: 'GET',
        };
      },
      providesTags: ['found'],
    }),

    updateFoundItems: build.mutation({
      query: (obj) => ({
        url: `/property/update-found-items/${obj.id}`,
        method: 'PATCH',
        data: obj.data,
      }),
      invalidatesTags: ['found'],
    }),
    deleteFoundtems: build.mutation({
      query: (id) => ({
        url: `/property/update-found-items/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['found'],
    }),
  }),
});

export const {
  useCrateFoundItemMutation,
  useGetMyFoundItemsQuery,
  useGetSingleFoundItemsQuery,
  useUpdateFoundItemsMutation,
  useDeleteFoundtemsMutation,
  useGetAllFoundItemsQuery,
} = extendedApi;
