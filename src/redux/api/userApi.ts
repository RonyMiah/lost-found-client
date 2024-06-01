import { IMeta } from '@/types';
import { baseApi } from './baseApi';

const extendedApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllUser: build.query({
      query: (query: Record<string, any>) => ({
        url: '/user',
        method: 'GET',
        params: query,
      }),
      transformResponse: (response: any, meta: IMeta) => {
        return {
          users: response,
          meta,
        };
      },
      providesTags: ['user'],
    }),

    getSingelUser: build.query({
      query: () => ({
        url: '/user/me',
        method: 'GET',
      }),
      providesTags: ['user'],
    }),

    updateUserInfo: build.mutation({
      query: (data) => ({
        url: `/user/${data.id}/status`,
        method: 'PATCH',
        data: data.body,
      }),
      invalidatesTags: ['user'],
    }),
    updateMyProfile: build.mutation({
      query: (data) => ({
        url: `/user/update-my-profile`,
        method: 'PATCH',
        data: data,
      }),
      invalidatesTags: ['user'],
    }),
    deleteUser: build.mutation({
      query: (id) => {
        // console.log(id);
        return {
          url: `/user/delete/${id}`,
          method: 'DELETE',
        };
      },
      invalidatesTags: ['user'],
    }),
  }),
});

export const {
  useGetAllUserQuery,
  useGetSingelUserQuery,
  useUpdateUserInfoMutation,
  useDeleteUserMutation,
  useUpdateMyProfileMutation,
} = extendedApi;
