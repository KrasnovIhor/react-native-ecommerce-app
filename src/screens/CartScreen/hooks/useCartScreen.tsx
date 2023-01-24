import React, { useCallback, useEffect, useMemo } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  useCreateCartMutation,
  useLazyRetrieveCartQuery,
} from 'api/modules/cart';
import { CartItemCard } from 'components/CartItemCard';
import get from 'lodash/get';
import { Routes, Stacks } from 'navigation';
import { useAppSelector } from 'store/hooks';
import { CartIncluded } from 'types/api';
import { useStyles } from '../CartScreen.styles';
import { useTheme } from 'providers/ThemeProvider';

export const useCartScreen = () => {
  const styles = useStyles();
  const theme = useTheme();
  const { navigate } = useNavigation();
  const { isAuthenticated } = useAppSelector(state => state.auth);
  const [retriveCart, { data, isLoading, isError }] =
    useLazyRetrieveCartQuery();
  const [createCart] = useCreateCartMutation();

  const handleLoginNavigate = useCallback(() => {
    navigate(Routes.LOGIN);
  }, [navigate]);
  const handleShopNavigate = useCallback(() => {
    navigate(Stacks.PRODUCT, { screen: Routes.MAIN });
  }, [navigate]);
  const handleProceedToPayment = useCallback(() => {
    navigate(Routes.CART_CONFIRAMTION);
  }, [navigate]);

  const lineItems = useMemo(
    () => data?.included.filter(item => item.type === 'line_item'),
    [data?.included]
  );

  const variants = useMemo(
    () => data?.included.filter(item => item.type === 'variant'),
    [data?.included]
  );

  const renderCartItem = useCallback(
    (lineItem: CartIncluded) => {
      const variant = variants?.find(
        variantValue =>
          variantValue.id === lineItem.relationships.variant?.data?.id
      );
      const imageId = get(variant, 'relationships.images.data[0].id', '1');
      const colorId = get(
        variant,
        'relationships.option_values.data[0].id',
        '1'
      );

      return (
        <CartItemCard
          colorId={colorId}
          imageId={imageId}
          price={lineItem.attributes.display_price}
          quantity={lineItem.attributes.quantity || 1}
          title={lineItem.attributes.name || ''}
          key={lineItem.id}
        />
      );
    },
    [variants]
  );

  const refetch = useCallback(async () => {
    await retriveCart('line_items,variants');
  }, [retriveCart]);

  const getCart = useCallback(async () => {
    if (isAuthenticated) {
      const response = await retriveCart('line_items,variants');

      if (
        response.error &&
        'status' in response.error &&
        response.error.status === 404
      ) {
        await createCart({});
        await refetch();
      }
    }
  }, [createCart, isAuthenticated, refetch, retriveCart]);

  useEffect(() => {
    getCart();
  }, [getCart]);

  return {
    styles,
    theme,
    handleLoginNavigate,
    handleShopNavigate,
    handleProceedToPayment,
    renderCartItem,
    refetch,
    isAuthenticated,
    data,
    isLoading,
    isError,
    lineItems,
    variants,
  };
};
