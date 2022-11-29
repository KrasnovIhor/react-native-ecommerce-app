import { CONTAINER_CENTER } from 'constants';
import React from 'react';
import { ActivityIndicator, View } from 'react-native';

export const LoadingScreen = () => {
  return (
    <View style={CONTAINER_CENTER}>
      <ActivityIndicator size="large" />
    </View>
  );
};
