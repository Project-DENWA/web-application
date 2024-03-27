import { apiSlice } from '../api/apiSlice';
export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: 'auth/login',
        method: 'POST',
        body: data,
      }),
    }),

    logout: builder.mutation({
      query: (session) => ({
        url: `auth/logout/${session}`,
        method: 'DELETE',
      }),
    }),

    registration: builder.mutation({
      query: (data) => ({
        url: `auth/registration`,
        method: 'POST',
        body: data,
      }),
    }),

    updateAvatar: builder.mutation({
      query: (data) => ({
        url: `users/avatar`,
        method: 'PATCH',
        body: data.newAvatar,
      }),
    }),
  }),
});

export const { useLoginMutation, useLogoutMutation, useRegistrationMutation, useUpdateAvatarMutation } =
  authApi;