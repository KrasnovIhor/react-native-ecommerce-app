import { useCallback, useEffect, useRef, useState } from 'react';
import { useStyles } from '../SearchScreen.styles';
import { useLazyGetProductsQuery } from 'api/modules/products';
import { RNEInputRef } from 'components/SearchBar';

export const useSearchScreen = () => {
  const styles = useStyles();
  const input = useRef<RNEInputRef>(null);
  const [searchValue, setSearchValue] = useState('');
  const [getProducts, { data: productsData, isLoading }] =
    useLazyGetProductsQuery();

  const searchProducts = useCallback(() => {
    getProducts(searchValue);
  }, [getProducts, searchValue]);

  useEffect(() => {
    input.current?.focus();
  }, []);

  return {
    searchValue,
    setSearchValue,
    searchProducts,
    productsData,
    isLoading,
    styles,
    input,
  };
};
