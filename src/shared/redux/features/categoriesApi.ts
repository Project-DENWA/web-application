import { apiSlice } from '../api/apiSlice';

interface Work {
  id: string;
  name: string;
  description: string;
  cost: string;
  deadline: string;
  views: number;
  status: string;
  created_at: string;
}

interface Category {
  id: string;
  name: string;
}

interface WorkCategory {
  id: string;
  work: Work;
  category: Category;
}

interface CategoryWithWork {
  id: string;
  name: string;
  workCategories: WorkCategory[];
}

interface Response {
  ok: boolean;
  result: CategoryWithWork[];
}

export const categoriesApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCategories: builder.query<Response, void>({
      query: () => ({
        url: `categories/getAll`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetCategoriesQuery } = categoriesApi;
