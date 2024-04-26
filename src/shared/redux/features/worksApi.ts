import { apiSlice } from '../api/apiSlice';
import { CreateOrderFormData } from '@/app/[locale]/(marketing)/create-order/schema';
import { Task } from '@/app/[locale]/(marketing)/orders/_components/TasksContent/ITask';

export const worksApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createOrder: builder.mutation<{ data: CreateOrderFormData }, CreateOrderFormData>({
      query: (data) => ({
        url: 'works/create',
        method: 'POST',
        body: data,
      }),
    }),
    getWorks: builder.query<Task[], { sort: string; page: number; pageSize: number }>({
      query: ({ sort, page, pageSize }) => ({
        url: `works/create/feed?sort=${sort}&page=${page}&pageSize=${pageSize}`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useCreateOrderMutation, useGetWorksQuery } = worksApi;
