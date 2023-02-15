import React, { useCallback } from 'react';
import { SearchBar } from 'components/SearchBar';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ProductsList } from 'components/ProductsList';
import { useSearchScreen } from './hooks';
import {
  SearchHistoryList,
  SearchHistoryItem,
} from 'components/SearchHistoryList';

export const SearchScreen = () => {
  const {
    input,
    styles,
    searchValue,
    isLoading,
    productsData,
    searchProducts,
    searchHistoryList,
    onSearchItemPress,
    clearItem,
    onChangeText,
    isVisibleList,
    setIsVisibleList,
  } = useSearchScreen();

  const renderItem = useCallback(
    (item: string) => {
      const onPress = () => {
        onSearchItemPress(item);
        setIsVisibleList(false);
      };

      return (
        <SearchHistoryItem
          item={item}
          onPress={onPress}
          onClear={() => clearItem(item)}
        />
      );
    },
    [clearItem, onSearchItemPress, setIsVisibleList]
  );

  return (
    <SafeAreaView style={styles.container} edges={['left', 'bottom', 'right']}>
      <View style={styles.searchBarContainer}>
        <SearchBar
          ref={input}
          value={searchValue}
          onChangeText={onChangeText}
          onIconPress={searchProducts}
        />
      </View>
      <View style={styles.searchHistoryListWrapper}>
        <SearchHistoryList
          items={searchHistoryList}
          style={styles.searchHistoryList}
          isVisible={isVisibleList}
          renderItem={renderItem}
          keyExtractor={(item, key) => `${item}-${key}`}
        />
      </View>
      <ProductsList
        products={productsData?.data}
        isLoading={isLoading}
        onRefresh={searchProducts}
      />
    </SafeAreaView>
  );
};
