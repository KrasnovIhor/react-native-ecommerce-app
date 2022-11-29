import React, { useCallback, useEffect } from 'react';
import { FlatList, ListRenderItem, RefreshControl } from 'react-native';
import { useProducts } from 'providers/ProductsProvider';
import { ProductCard } from 'components/ProductCard';

import { styles } from './ProductsList.styles';
import { LoadingScreen } from 'screens/LoadingScreen';
import { Product } from 'types/products';
import { useOrientation } from 'hooks/useOrientation';

export const ProductsList = () => {
  const { productsList, fetchProducts, isLoading } = useProducts();
  const orientation = useOrientation();

  const renderItem: ListRenderItem<Product> = useCallback(
    ({ item }) => <ProductCard product={item} />,
    []
  );

  const keyExtractor: (item: Product) => string = useCallback(
    item => item.id,
    []
  );

  const numCols = orientation === 'PORTRAIT' ? 2 : 4;
  const columnWrapperStyle =
    orientation === 'PORTRAIT' ? styles.row : styles.horizontalRow;

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
