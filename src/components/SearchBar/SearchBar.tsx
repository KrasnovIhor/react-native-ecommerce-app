import React from 'react';
import { Input } from '@rneui/themed';
import { useStyles } from './SearchBar.styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { GRAY_500 } from 'assets/colors';

export const SearchBar = () => {
  const styles = useStyles();

  return (
    <Input
      inputContainerStyle={styles.inputContainer}
      inputStyle={styles.input}
      containerStyle={styles.container}
      errorStyle={styles.errorStyle}
      leftIconContainerStyle={styles.leftIcon}
      leftIcon={<Icon name="search" color={GRAY_500} size={25} />}
    />
  );
};
