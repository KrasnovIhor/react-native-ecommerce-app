import { api } from 'api';
import {
  CreateUserAddress,
  CreateUserRequest,
  UserAddressResponse,
  UserAddressesAllResponse,
  UserData,
} from 'types/user';
import { ACCOUNT_URL, ACCOUT_ADDRESS_URL } from 'constants';

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
        params: { 'fields[user]': 'phone,city,address1,address2' },
      }),
      providesTags: ['User'],
    }),
    createAccountAddress: build.mutation<
      UserAddressResponse,
      CreateUserAddress
    >({
      query: body => ({
        url: ACCOUT_ADDRESS_URL,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Address'],
    }),
    updateAccountAddress: build.mutation<
      UserAddressResponse,
      { body: CreateUserAddress; id: string }
    >({
      query: ({ body, id }) => ({
        url: `${ACCOUT_ADDRESS_URL}/${id}`,
        method: 'PATCH',
        body,
      }),
      invalidatesTags: ['Address'],
    }),
    retrieveAccountAddresses: build.query<UserAddressesAllResponse, void>({
      query: () => ({
        url: ACCOUT_ADDRESS_URL,
        method: 'GET',
      }),
      providesTags: ['Address'],
    }),
  }),
  overrideExisting: false,
});

export const {
  useCreateAccountMutation,
  useLazyRetrieveAccountQuery,
  useRetrieveAccountQuery,
  useLazyRetrieveAccountAddressesQuery,
  useRetrieveAccountAddressesQuery,
  useCreateAccountAddressMutation,
  useUpdateAccountAddressMutation,
} = userApi;
export const useUserState = userApi.endpoints.retrieveAccount.useQueryState;
