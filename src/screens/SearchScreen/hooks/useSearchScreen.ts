import { useCallback, useEffect, useRef, useState } from 'react';
import { useStyles } from '../SearchScreen.styles';
import { useLazyGetProductsQuery } from 'api/modules/products';
import { RNEInputRef } from 'components/SearchBar';
import { useSearchHistory } from 'hooks/useSearchHistory';

export const useSearchScreen = () => {
  const styles = useStyles();
  const input = useRef<RNEInputRef>(null);
  const [searchValue, setSearchValue] = useState('');
  const [isVisibleList, setIsVisibleList] = useState(true);
  const [getProducts, { data: productsData, isLoading }] =
    useLazyGetProductsQuery();
  const { addItemToList, searchHistoryList, clearItem, getSearchHistoryList } =
    useSearchHistory();

  const searchProducts = useCallback(() => {
    getProducts(searchValue);
    addItemToList(searchValue);
    setIsVisibleList(false);
  }, [addItemToList, getProducts, searchValue]);

  const onSearchItemPress = useCallback((item: string) => {
    setSearchValue(item);
  }, []);

  const onChangeText = useCallback((text: string) => {
    setSearchValue(text);
  }, []);

  useEffect(() => {
    input.current?.focus();
  }, []);

  useEffect(() => {
    if (!searchValue) {
      setIsVisibleList(true);
      getSearchHistoryList();
    }
  }, [getSearchHistoryList, searchValue]);

  return {
    searchValue,
    searchHistoryList,
    setSearchValue,
    setIsVisibleList,
    isVisibleList,
    onSearchItemPress,
    searchProducts,
    getProducts,
    clearItem,
    onChangeText,
    productsData,
    isLoading,
    styles,
    input,
  };
};
