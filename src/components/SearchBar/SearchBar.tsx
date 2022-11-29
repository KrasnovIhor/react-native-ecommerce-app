import React from 'react';
import { Input } from '@rneui/themed';
import { styles } from './SearchBar.styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { NEUTRAL_GRAY } from 'assets/colors';

export const SearchBar = () => {
  return (
    <Input
      inputContainerStyle={styles.inputContainer}
      inputStyle={styles.input}
      containerStyle={styles.container}
      errorStyle={styles.errorStyle}
      leftIconContainerStyle={styles.leftIcon}
      leftIcon={<Icon name="search" color={NEUTRAL_GRAY} size={25} />}
    />
  );
};
