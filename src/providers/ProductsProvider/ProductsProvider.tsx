import React, {
  PropsWithChildren,
  useCallback,
  useMemo,
  useState,
} from 'react';
import { Product } from 'types/products';
import { parseProducts } from 'utils';
import { LIST_ALL_PRODUCTS_API } from 'constants';

type ProductsContextType = {
  productsList: Product[];
  currentProduct: Product | null;
  isLoading: boolean;
  fetchProducts: () => Promise<any>;
  fetchProductById: (id: string) => Promise<any>;
  isError: boolean;
};

export const ProductsContext = React.createContext<ProductsContextType>({
  productsList: [],
  currentProduct: null,
  isLoading: false,
  fetchProducts: async () => {},
  fetchProductById: async () => {},
  isError: false,
});

export const ProductsProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [productsList, setProductsList] = useState<Product[]>([]);
  const [currentProduct, setCurrentProduct] = useState<Product | null>(null);
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);

  const fetchProducts = useCallback(async () => {
    setLoading(true);

    try {
      const response = await fetch(LIST_ALL_PRODUCTS_API);
      const { data: productsData } = await response.json();

      setLoading(false);
      const products = parseProducts(productsData);
      setProductsList(products);

      return products;
    } catch {
      setError(true);
      setLoading(false);
    }
  }, []);

  const fetchProductById = useCallback(async (id: string) => {
    setLoading(true);

    try {
      const response = await fetch(`${LIST_ALL_PRODUCTS_API}/${id}`);
      const { data: productData } = await response.json();

      setLoading(false);
      const [product] = parseProducts([productData]);
      setCurrentProduct(product);

      return product;
    } catch {
      setError(true);
      setLoading(false);
    }
  }, []);

  const context: ProductsContextType = useMemo(
    () => ({
      productsList,
      isLoading,
      fetchProducts,
      fetchProductById,
      currentProduct,
      isError,
    }),
    [
      productsList,
      isLoading,
      fetchProducts,
      fetchProductById,
      currentProduct,
      isError,
    ]
  );

  return (
    <ProductsContext.Provider value={context}>
      {children}
    </ProductsContext.Provider>
  );
};
