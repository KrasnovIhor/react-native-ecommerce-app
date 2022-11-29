import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { styles } from './ImageLoadingIndicator.styles';

export const ImageLoadingIndicator = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator style={styles.loader} />
    </View>
  );
};
