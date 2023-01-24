import { CreateUserRequest } from './../../types/api';
import { api } from 'api';
import { UserData } from 'types/user';
import { ACCOUNT_URL } from 'constants';

const userApi = api.injectEndpoints({
  endpoints: build => ({
    createAccount: build.mutation<{ data: UserData }, CreateUserRequest>({
      query: body => ({
        url: ACCOUNT_URL,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['User'],
    }),
    retrieveAccount: build.query<{ data: UserData }, void>({
      query: () => ({
        url: ACCOUNT_URL,
        method: 'GET',
      }),
      providesTags: ['User'],
    }),
  }),
  overrideExisting: false,
});

export const {
  useCreateAccountMutation,
  useLazyRetrieveAccountQuery,
  useRetrieveAccountQuery,
} = userApi;
export const useUserState = userApi.endpoints.retrieveAccount.useQueryState;
