import { StoreFrontResponse } from 'types/api';
import { api } from 'api';
import { Product, ProductVariant } from 'types/products';
import { parseProducts } from 'utils';
import { PRODUCTS_URL } from 'constants/api';

export const productsApi = api.injectEndpoints({
  endpoints: build => ({
    getProducts: build.query<StoreFrontResponse<Product[]>, string | undefined>(
      {
        query: filterName => ({
          url: PRODUCTS_URL,
          method: 'GET',
          params: filterName
            ? {
                'filter[name]': filterName,
              }
            : {},
        }),
        transformResponse: (response: StoreFrontResponse<Product[]>) => {
          const data = response.data;
          const products = parseProducts(data);
          return {
            ...response,
            data: products,
          };
        },
        providesTags: ['Product'],
      }
    ),
    getProductById: build.query<
      { data: Product; included: ProductVariant[] },
      string
    >({
      query: id => ({
        url: `${PRODUCTS_URL}/${id}`,
        params: { include: 'variants' },
      }),
      transformResponse: (response: {
        data: Product;
        included: ProductVariant[];
      }) => {
        const data = response.data;
        const [product] = parseProducts([data]);

        return {
          ...response,
          data: product,
        };
      },
      providesTags: ['Product'],
    }),
  }),
  overrideExisting: false,
});

export const {
  useLazyGetProductsQuery,
  useGetProductsQuery,
  useGetProductByIdQuery,
  useLazyGetProductByIdQuery,
} = productsApi;
export const useProductsState = productsApi.endpoints.getProducts.useQueryState;
