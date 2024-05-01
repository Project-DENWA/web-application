import { apiSlice } from '../api/apiSlice';
import { ResumeData } from '@/app/[locale]/(marketing)/create-resume/schema';

export const resumeApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createResume: builder.mutation<{ data: ResumeData }, ResumeData>({
      query: (data) => ({
        url: 'resumes/create',
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const { useCreateResumeMutation } = resumeApi;
