import { apiSlice } from '../api/apiSlice';

export const feedbackApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createFeedback: builder.mutation({
      query: (data) => ({
        url: 'feedbacks/create',
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const { useCreateFeedbackMutation } = feedbackApi;
