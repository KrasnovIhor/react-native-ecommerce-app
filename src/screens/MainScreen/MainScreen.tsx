import React, { useCallback, useEffect } from 'react';
import { View } from 'react-native';

import { ProductsList } from 'components/ProductsList';
import { SearchBar } from 'components/SearchBar';

import { useStyles } from './MainScreen.styles';
import { useNavigation } from '@react-navigation/native';
import { Routes, Stacks } from 'navigation';
import { useLazyGetProductsQuery } from 'api/modules/products';

export const MainScreen = () => {
  const styles = useStyles();
  const { navigate } = useNavigation();
  const [getProducts, { data: productsData, isLoading }] =
    useLazyGetProductsQuery();

  const onRefresh = useCallback(async () => {
    await getProducts(undefined);
  }, [getProducts]);

  const onPress = () => {
    navigate(Stacks.PRODUCT, {
      screen: Routes.SEARCH,
    });
  };

  useEffect(() => {
    onRefresh();
  }, [onRefresh]);

  return (
    <View style={styles.container}>
      <View style={[styles.searchBarContainer, styles.shadowProps]}>
        <SearchBar onPressIn={onPress} />
      </View>
      <ProductsList
        onRefresh={onRefresh}
        products={productsData?.data}
        isLoading={isLoading}
      />
    </View>
  );
};
