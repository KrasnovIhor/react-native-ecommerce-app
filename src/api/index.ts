import {
  BaseQueryFn,
  createApi,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query/react';
import { APP_STOREFRONT_API, APP_TOKEN_API } from 'constants';
import { authLogout } from 'store/auth/authSlice';
import { TokenApiResponse, TokenApiRequestBody } from 'types/api';
import { clearToken, getToken } from 'utils';

const baseQuery = fetchBaseQuery({
  baseUrl: APP_STOREFRONT_API,
  prepareHeaders: async (headers: Headers): Promise<Headers> => {
    const token = await getToken();
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  const result = await baseQuery(args, api, extraOptions);

  if (result.error?.status === 401) {
    api.dispatch(authLogout());
    await clearToken();
  }

  return result;
};

export const api = createApi({
  reducerPath: 'api',
  baseQuery: baseQueryWithReauth,
  tagTypes: ['Product', 'User', 'Cart'],
  endpoints: () => ({}),
});

export const tokenApi = createApi({
  reducerPath: 'tokenApi',
  baseQuery: fetchBaseQuery({ baseUrl: APP_TOKEN_API }),
  endpoints: build => ({
    fetchToken: build.mutation<TokenApiResponse, TokenApiRequestBody>({
      query: body => ({
        url: '',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useFetchTokenMutation } = tokenApi;
