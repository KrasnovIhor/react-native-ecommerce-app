import React, { useCallback, useEffect, useMemo } from 'react';
import {
  FlatList,
  ListRenderItem,
  RefreshControl,
  ViewStyle,
} from 'react-native';
import { useProducts } from 'providers/ProductsProvider';
import { ProductCard } from 'components/ProductCard';

import { useStyles } from './ProductsList.styles';
import { LoadingScreen } from 'screens/LoadingScreen';
import { Product } from 'types/products';
import { useOrientation } from 'hooks/useOrientation';

export const ProductsList = () => {
  const styles = useStyles();
  const { productsList, fetchProducts, isLoading } = useProducts();
  const orientation = useOrientation();
  const numCols = orientation === 'PORTRAIT' ? 2 : 4;
  const columnWrapperStyle =
    orientation === 'PORTRAIT' ? styles.row : styles.horizontalRow;

  const productCardContainerStyle: ViewStyle = useMemo(
    () => ({
      flex: 1 / numCols,
    }),
    [numCols]
  );

  const renderItem: ListRenderItem<Product> = useCallback(
    ({ item }) => (
      <ProductCard containerStyle={productCardContainerStyle} product={item} />
    ),
    [productCardContainerStyle]
  );

  const keyExtractor: (item: Product) => string = useCallback(
    item => item.id,
    []
  );

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return isLoading && productsList.length === 0 ? (
    <LoadingScreen />
  ) : (
    <FlatList
      key={numCols}
      numColumns={numCols}
      contentContainerStyle={styles.container}
      renderItem={renderItem}
      data={productsList}
      keyExtractor={keyExtractor}
      columnWrapperStyle={columnWrapperStyle}
      refreshControl={
        <RefreshControl refreshing={isLoading} onRefresh={fetchProducts} />
      }
    />
  );
};
