import { apiSlice } from '../api/apiSlice';
import { CreateOrderFormData } from '@/app/[locale]/(marketing)/create-order/schema';

export const worksApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createOrder: builder.mutation<{ data: CreateOrderFormData }, CreateOrderFormData>({
      query: (data) => ({
        url: 'works/create',
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const { useCreateOrderMutation } = worksApi;
