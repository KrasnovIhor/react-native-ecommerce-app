import React from 'react';
import { View } from 'react-native';

import { Header } from 'components/Header';
import { ProductsList } from 'components/ProductsList';
import { SearchBar } from 'components/SearchBar';

import { useStyles } from './MainScreen.styles';

export const MainScreen = () => {
  const styles = useStyles();

  return (
    <View style={styles.container}>
      <Header title="Ecommerce Store" />
      <View style={[styles.searchBarContainer, styles.shadowProps]}>
        <SearchBar />
      </View>
      <ProductsList />
    </View>
  );
};
