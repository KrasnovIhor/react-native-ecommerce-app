import React, { useMemo, useCallback, useState } from 'react';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { useGetProductByIdQuery } from 'api/modules/products';
import { Modals, ProductStackParamList, Routes, Stacks } from 'navigation';
import { useTheme } from 'providers/ThemeProvider';
import { getColorById, getImagePathById } from 'utils';
import { useStyles } from '../ProductDetailsScreen.styles';
import Image from 'react-native-fast-image';
import { useAppSelector } from 'store/hooks';
import { useAddItemToCartMutation } from 'api/modules/cart';
import get from 'lodash/get';

type ProductDetailsRootProp = RouteProp<
  ProductStackParamList,
  Routes.PRODUCT_DETAILS
>;

export const useProductDetails = () => {
  const styles = useStyles();
  const theme = useTheme();

  const [isColorSelected, setSelectedColor] = useState(false);

  const {
    params: { productId },
  } = useRoute<ProductDetailsRootProp>();
  const { navigate } = useNavigation();
  const { isAuthenticated } = useAppSelector(state => state.auth);

  const {
    data: currentProductData,
    isLoading,
    refetch,
  } = useGetProductByIdQuery(productId);
  const [addItemToCart, { isLoading: isLoadingAddToCart }] =
    useAddItemToCartMutation();
  const currentProduct = currentProductData?.data;

  const color = useMemo(() => {
    const colorId = get(
      currentProductData,
      'included[0].relationships.option_values.data[0].id',
      '0'
    );

    return getColorById(colorId);
  }, [currentProductData]);

  const handleAddToCart = useCallback(async () => {
    if (isAuthenticated) {
      if (isColorSelected) {
        const requestBody = {
          variant_id: get(
            currentProduct,
            'relationships.variants.data[0].id',
            '0'
          ),
          quantity: 1,
        };
        await addItemToCart(requestBody);

        navigate(Stacks.PRODUCT, {
          screen: Modals.PRODUCT_ADDED_MODAL,
        });
      } else {
        navigate(Stacks.PRODUCT, {
          screen: Modals.SELECT_COLOR_MODAL,
        });
      }
    } else {
      navigate(Stacks.PRODUCT, {
        screen: Modals.LOGIN_MODAL,
      });
    }
  }, [
    isAuthenticated,
    isColorSelected,
    currentProduct,
    addItemToCart,
    navigate,
  ]);

  const toggleSelectedColor = useCallback(() => {
    setSelectedColor(prev => !prev);
  }, []);

  const imageItems = useMemo(() => {
    const imagesData = currentProduct?.relationships.images.data ?? [];

    if (imagesData.length !== 0) {
      return imagesData.map(imageData => {
        const imageProps = {
          id: imageData.id,
          width: 250,
          height: 250,
        };

        return (
          <Image
            source={{
              uri: getImagePathById(imageProps),
              priority: Image.priority.normal,
            }}
            style={styles.image}
            key={imageProps.id}
            resizeMode={Image.resizeMode.contain}
          />
        );
      });
    }

    return [];
  }, [currentProduct?.relationships.images.data, styles.image]);

  return {
    styles,
    theme,
    isLoading,
    isLoadingAddToCart,
    currentProduct,
    color,
    imageItems,
    isColorSelected,
    refetch,
    handleAddToCart,
    toggleSelectedColor,
  };
};
