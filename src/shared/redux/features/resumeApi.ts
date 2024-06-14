import { ResumesResponse } from '@/app/interfaces/IResumesResponse';
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
    getAllResumes: builder.query<ResumesResponse, void>({
      query: () => ({
        url: `resumes/all`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useCreateResumeMutation, useGetAllResumesQuery } = resumeApi;
