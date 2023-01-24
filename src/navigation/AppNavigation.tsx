import React from 'react';
import { RootStackParamList, Routes, Stacks } from './AppNavigation.types';
import { ProductScreenStack } from './navigators/ProductStack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerMenu } from 'components/DrawerMenu';
import { ProfileScreen } from 'screens/ProfileScreen';
import { WishListScreen } from 'screens/WishListScreen';
import { CartScreen } from 'screens/CartScreen';
import { OrdersScreen } from 'screens/OrdersScreen';
import { useHeader, useInitAuth } from './hooks';
import { LoginScreen } from 'screens/LoginScreen';
import { SignUpScreen } from 'screens/SignUpScreen';

export const RootStack = createDrawerNavigator<RootStackParamList>();

export const AppNavigation = () => {
  const { drawerNavigationOptions, emptyComponent } = useHeader();
  const { isAuthenticated } = useInitAuth();

  return (
    <>
      <RootStack.Navigator
        initialRouteName={Stacks.PRODUCT}
        screenOptions={{ headerShown: false }}
        drawerContent={props => <DrawerMenu {...props} />}>
        <RootStack.Screen
          name={Stacks.PRODUCT}
          component={ProductScreenStack}
        />
        <RootStack.Group
          screenOptions={{
            ...drawerNavigationOptions,
            headerShown: true,
          }}>
          {isAuthenticated ? (
            <>
              <RootStack.Screen
                name={Routes.MY_PROFILE}
                component={ProfileScreen}
                options={{ headerTitle: 'My Profile' }}
              />
              <RootStack.Screen
                name={Routes.MY_WISH_LIST}
                component={WishListScreen}
                options={{ headerTitle: 'My Wish List' }}
              />
            </>
          ) : (
            <>
              <RootStack.Screen
                name={Routes.LOGIN}
                component={LoginScreen}
                options={{ headerShown: false }}
              />
              <RootStack.Screen
                name={Routes.SIGN_UP}
                component={SignUpScreen}
                options={{ headerShown: false }}
              />
            </>
          )}
          <RootStack.Screen
            name={Routes.MY_CART}
            component={CartScreen}
            options={{ headerTitle: 'My Cart', headerRight: emptyComponent }}
          />
          <RootStack.Screen
            name={Routes.MY_ORDERS}
            component={OrdersScreen}
            options={{ headerTitle: 'My Orders' }}
          />
        </RootStack.Group>
      </RootStack.Navigator>
    </>
  );
};
