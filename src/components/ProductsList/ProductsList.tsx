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
import { useNavigation } from '@react-navigation/native';
import { Routes, Stacks } from 'navigation';
import { useTheme } from 'providers/ThemeProvider';

type ProductsListProps = {
  products?: Product[];
  onRefresh?: () => void;
  isLoading: boolean;
};

export const ProductsList: React.FC<ProductsListProps> = ({
  products,
  onRefresh,
  isLoading,
}) => {
  const styles = useStyles();
  const theme = useTheme();
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

  if (products && products.length === 0) {
    return null;
  }

  return (
    <FlatList
      key={numCols}
      numColumns={numCols}
      contentContainerStyle={styles.container}
      renderItem={renderItem}
      data={products}
      keyExtractor={keyExtractor}
      columnWrapperStyle={columnWrapperStyle}
      refreshControl={
        <RefreshControl
          colors={[theme.colors.primary]}
          tintColor={theme.colors.primary}
          refreshing={isLoading}
          onRefresh={onRefresh}
        />
      }
    />
  );
};
