import React from 'react';
import { View } from 'react-native';

import { ProductsList } from 'components/ProductsList';
import { SearchBar } from 'components/SearchBar';

import { useStyles } from './MainScreen.styles';
import { useNavigation } from '@react-navigation/native';
import { Routes, Stacks } from 'navigation';

export const MainScreen = () => {
  const styles = useStyles();
  const { navigate } = useNavigation();

  const onPress = () => {
    navigate(Stacks.PRODUCT, {
      screen: Routes.SEARCH,
    });
  };

  return (
    <View style={styles.container}>
      <View style={[styles.searchBarContainer, styles.shadowProps]}>
        <SearchBar onPressIn={onPress} />
      </View>
      <ProductsList />
    </View>
  );
};
