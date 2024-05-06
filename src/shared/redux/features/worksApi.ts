import { apiSlice } from '../api/apiSlice';
import { CreateOrderFormData } from '@/app/[locale]/(marketing)/create-order/schema';
import { Order, OrderResult } from '@/app/[locale]/(marketing)/orders/[order]/Iordet';
export const worksApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createOrder: builder.mutation<{ data: CreateOrderFormData }, CreateOrderFormData>({
      query: (data) => ({
        url: 'works/create',
        method: 'POST',
        body: data,
      }),
    }),
    getWorks: builder.query<Order, { sort: string; page: number; pageSize: number }>({
      query: ({ sort, page, pageSize }) => ({
        url: `works/create/feed?sort=${sort}&page=${page}&pageSize=${pageSize}`,
        method: 'GET',
      }),
    }),    
    getOrder: builder.query<Order, { id: string}>({
      query: ({ id }) => ({
        url: `works/${id}`,
        method: 'GET',
      }),
    }),
    addView: builder.mutation({
      query: (data) => ({
        url: "works/add-view/",
        method: 'POST',
        body: data
      }),
    })
  }),
});

export const { useCreateOrderMutation, useGetWorksQuery, useGetOrderQuery, useAddViewMutation } = worksApi;
