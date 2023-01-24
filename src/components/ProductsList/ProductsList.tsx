import React, { useCallback, useMemo } from 'react';
import {
  FlatList,
  ListRenderItem,
  RefreshControl,
  ViewStyle,
} from 'react-native';
import { ProductCard } from 'components/ProductCard';

import { useStyles } from './ProductsList.styles';
import { LoadingScreen } from 'screens/LoadingScreen';
import { Product } from 'types/products';
import { useOrientation } from 'hooks/useOrientation';
import { useGetProductsQuery } from 'api/modules/products';
import { useNavigation } from '@react-navigation/native';
import { Routes, Stacks } from 'navigation';

export const ProductsList = () => {
  const styles = useStyles();
  const { data: productsData, refetch, isLoading } = useGetProductsQuery();
  const orientation = useOrientation();
  const numCols = orientation === 'PORTRAIT' ? 2 : 4;
  const columnWrapperStyle =
    orientation === 'PORTRAIT' ? styles.row : styles.horizontalRow;
  const { navigate } = useNavigation();

  const productCardContainerStyle: ViewStyle = useMemo(
    () => ({
      flex: 1 / numCols,
    }),
    [numCols]
  );

  const handleOnPress = useCallback(
    (productId: string) => {
      navigate(Stacks.PRODUCT, {
        screen: Routes.PRODUCT_DETAILS,
        params: {
          productId,
        },
      });
    },
    [navigate]
  );

  const renderItem: ListRenderItem<Product> = useCallback(
    ({ item }) => (
      <ProductCard
        onPress={() => handleOnPress(item.id)}
        containerStyle={productCardContainerStyle}
        product={item}
      />
    ),
    [handleOnPress, productCardContainerStyle]
  );

  const keyExtractor: (item: Product) => string = useCallback(
    item => item.id,
    []
  );

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (productsData && productsData.data.length === 0) {
    return null;
  }

  return (
    <FlatList
      key={numCols}
      numColumns={numCols}
      contentContainerStyle={styles.container}
      renderItem={renderItem}
      data={productsData?.data}
      keyExtractor={keyExtractor}
      columnWrapperStyle={columnWrapperStyle}
      refreshControl={
        <RefreshControl refreshing={isLoading} onRefresh={refetch} />
      }
    />
  );
};
