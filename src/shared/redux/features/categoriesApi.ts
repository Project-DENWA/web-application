import { apiSlice } from '../api/apiSlice';
import { CategoriesResponse } from '@/app/interfaces/ICategoriesResponse';

export const categoriesApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCategories: builder.query<CategoriesResponse, void>({
      query: () => ({
        url: `categories/get-all`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetCategoriesQuery } = categoriesApi;
