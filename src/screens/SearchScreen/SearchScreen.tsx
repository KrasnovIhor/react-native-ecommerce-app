import React from 'react';
import { SearchBar } from 'components/SearchBar';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ProductsList } from 'components/ProductsList';
import { useSearchScreen } from './hooks';

export const SearchScreen = () => {
  const {
    input,
    styles,
    setSearchValue,
    searchValue,
    isLoading,
    productsData,
    searchProducts,
  } = useSearchScreen();

  return (
    <SafeAreaView style={styles.container} edges={['left', 'bottom', 'right']}>
      <View style={styles.searchBarContainer}>
        <SearchBar
          ref={input}
          value={searchValue}
          onChangeText={text => setSearchValue(text)}
          onIconPress={searchProducts}
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
