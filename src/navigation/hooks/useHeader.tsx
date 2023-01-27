import React, { useCallback } from 'react';
import { Header } from 'components/Header';
import { useTheme } from 'providers/ThemeProvider';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { View } from 'react-native';
import { useStyles } from 'screens/ProductDetailsScreen/ProductDetailsScreen.styles';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { DrawerNavigationOptions } from '@react-navigation/drawer';
import { Routes } from 'navigation/AppNavigation.types';

export const useHeader = () => {
  const { colors, currentTheme } = useTheme();
  const styles = useStyles();
  const { dispatch, navigate } = useNavigation();

  const handleOnCartPress = useCallback(() => {
    navigate(Routes.MY_CART);
  }, [navigate]);

  const headerRightDefault = useCallback(
    () => (
      <Header.Button
        onPress={handleOnCartPress}
        icon={<Icon name="shopping-cart" color={colors.background} size={25} />}
      />
    ),
    [colors.background, handleOnCartPress]
  );

  const handleOnMenuPress = useCallback(() => {
    dispatch(DrawerActions.toggleDrawer());
  }, [dispatch]);

  const headerLeftDefault = useCallback(
    () => (
      <Header.Button
        onPress={handleOnMenuPress}
        icon={<Icon name="menu" color={colors.background} size={25} />}
      />
    ),
    [colors.background, handleOnMenuPress]
  );
  const emptyComponent = useCallback(() => {
    return null;
  }, []);

  const headerRightProductDetails = useCallback(
    () => (
      <View style={styles.headerButtonsRow}>
        <Header.Button
          icon={
            <Icon name="favorite-border" color={colors.background} size={25} />
          }
        />
        <Header.Button
          onPress={handleOnCartPress}
          icon={
            <Icon name="shopping-cart" color={colors.background} size={25} />
          }
        />
      </View>
    ),
    [colors, styles, handleOnCartPress]
  );

  const screenStackOptions: NativeStackNavigationOptions = {
    headerStyle: {
      backgroundColor: colors.primary,
    },
    headerRight: headerRightDefault,
    headerTitleStyle: {
      fontSize: 20,
      color: colors.background,
      fontWeight: '500',
    },
    headerTintColor: colors.background,
    headerBackTitle: '',
    headerShadowVisible: true,
  };

  const drawerNavigationOptions: DrawerNavigationOptions = {
    headerStyle: {
      backgroundColor: colors.primary,
    },
    headerRight: headerRightDefault,
    headerLeft: headerLeftDefault,
    headerTitleStyle: {
      fontSize: 20,
      color: colors.background,
      fontWeight: '500',
    },
    headerTintColor: colors.background,
    headerLeftContainerStyle: {
      paddingHorizontal: 15,
    },
    headerRightContainerStyle: {
      paddingHorizontal: 15,
    },
    headerBackgroundContainerStyle: {
      ...currentTheme.shadowProps,
    },
  };

  return {
    headerRightDefault,
    headerLeftDefault,
    headerRightProductDetails,
    emptyComponent,
    screenStackOptions,
    drawerNavigationOptions,
    colors,
  };
};
