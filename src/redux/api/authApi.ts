import { baseApi } from './baseApi';

const extendedApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    changePassword: build.mutation({
      query: (data) => ({
        url: '/auth/change-password',
        method: 'POST',
        data: data,
      }),
      invalidatesTags: ['user'],
    }),
  }),
});

export const {useChangePasswordMutation} = extendedApi;
