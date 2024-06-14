import { apiSlice } from '../api/apiSlice';

interface Language {
  id: string;
  name: string;
}

interface Response {
  ok: boolean;
  result: Language[];
}

export const languagesApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getLanguages: builder.query<Response, void>({
      query: () => ({
        url: `languages/get-all`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetLanguagesQuery } = languagesApi;
