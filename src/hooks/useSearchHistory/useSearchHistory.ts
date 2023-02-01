import AsyncStorage from '@react-native-async-storage/async-storage';
import { SEARCH_HISTORY_LIST_KEY } from 'constants';
import { useCallback, useState, useEffect } from 'react';

export const useSearchHistory = () => {
  const [searchHistoryList, setSearchHistoryList] = useState<string[]>([]);

  const addItemToList = useCallback(
    (searchItem: string) => {
      const sameItem = searchHistoryList.find(
        item => item.toLocaleLowerCase() === searchItem.toLocaleLowerCase()
      );
      if (sameItem || !searchItem) {
        return;
      }

      setSearchHistoryList(prev => {
        let newList: string[];

        if (prev.length >= 20) {
          newList = [...prev.slice(1, prev.length - 1), searchItem];
        } else {
          newList = [...prev, searchItem];
        }

        AsyncStorage.setItem(
          SEARCH_HISTORY_LIST_KEY,
          JSON.stringify(newList)
        ).catch(e => console.log(e));
        return newList;
      });
    },
    [searchHistoryList]
  );

  const clearItem = useCallback((item: string) => {
    setSearchHistoryList(prev => {
      const newList = prev.filter(searchItem => searchItem !== item);
      AsyncStorage.setItem(
        SEARCH_HISTORY_LIST_KEY,
        JSON.stringify(newList)
      ).catch(e => console.log(e));
      return newList;
    });
  }, []);

  const getSearchHistoryList = useCallback(async () => {
    try {
      const response = await AsyncStorage.getItem(SEARCH_HISTORY_LIST_KEY);

      console.log('getSearchHistoryList: ', response);

      if (response) {
        const searchList: string[] = JSON.parse(response);
        setSearchHistoryList(searchList);
      }
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    getSearchHistoryList();
  }, [getSearchHistoryList]);

  return {
    searchHistoryList: [...searchHistoryList].reverse(),
    addItemToList,
    clearItem,
    setSearchHistoryList,
    getSearchHistoryList,
  };
};
