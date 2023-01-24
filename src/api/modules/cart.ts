import { CartItem, CartItemData } from 'types/api';
import { api } from 'api';
import { CART_URL } from 'constants';

export const cartApi = api.injectEndpoints({
  endpoints: build => ({
    retrieveCart: build.query<CartItem, string>({
      query: includeParams => ({
        url: CART_URL,
        method: 'GET',
        params: { include: includeParams },
      }),
      providesTags: ['Cart'],
    }),
    createCart: build.mutation<{ data: CartItemData }, void | any>({
      query: body => ({
        url: CART_URL,
        method: 'POST',
        body: body ?? {},
      }),
      invalidatesTags: ['Cart'],
    }),
    addItemToCart: build.mutation<
      { data: CartItemData },
      { variant_id: string; quantity: number }
    >({
      query: body => ({
        url: `${CART_URL}/add_item`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Cart'],
    }),
    deleteCart: build.mutation<void, void>({
      query: () => ({
        url: CART_URL,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useLazyRetrieveCartQuery,
  useRetrieveCartQuery,
  useCreateCartMutation,
  useAddItemToCartMutation,
  useDeleteCartMutation,
} = cartApi;
export const useCartState = cartApi.endpoints.retrieveCart.useQueryState;
