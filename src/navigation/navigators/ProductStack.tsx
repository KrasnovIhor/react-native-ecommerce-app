import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  Modals,
  ProductStackParamList,
  Routes,
} from 'navigation/AppNavigation.types';
import { MainScreen } from 'screens/MainScreen';
import { ProductDetailsScreen } from 'screens/ProductDetailsScreen';
import { useHeader, useProductModal } from 'navigation/hooks';

const ProductStack = createNativeStackNavigator<ProductStackParamList>();

export const ProductScreenStack = () => {
  const { headerLeftDefault, headerRightProductDetails, screenStackOptions } =
    useHeader();
  const { selectColorModal, productAddedModal, loginModal } = useProductModal();

  return (
    <ProductStack.Navigator
      initialRouteName={Routes.MAIN}
      screenOptions={screenStackOptions}>
      <ProductStack.Screen
        name={Routes.MAIN}
        component={MainScreen}
        options={{
          title: 'Ecommerce Store',
          headerLeft: headerLeftDefault,
        }}
      />
      <ProductStack.Screen
        name={Routes.PRODUCT_DETAILS}
        component={ProductDetailsScreen}
        options={{
          title: '',
          headerRight: headerRightProductDetails,
        }}
      />
      <ProductStack.Group
        screenOptions={{
          presentation: 'transparentModal',
          animation: 'none',
          headerShown: false,
        }}>
        <ProductStack.Screen
          name={Modals.SELECT_COLOR_MODAL}
          component={selectColorModal}
        />
        <ProductStack.Screen
          name={Modals.PRODUCT_ADDED_MODAL}
          component={productAddedModal}
        />
        <ProductStack.Screen name={Modals.LOGIN_MODAL} component={loginModal} />
      </ProductStack.Group>
    </ProductStack.Navigator>
  );
};
