import { CONTAINER_CENTER } from 'constants';
import React from 'react';
import { View } from 'react-native';
import Lottie from 'lottie-react-native';
import { useStyles } from './LoadingScreen.styles';
export const LoadingScreen = () => {
  const styles = useStyles();

  return (
    <View style={CONTAINER_CENTER}>
      <Lottie
        source={require('assets/animations/loader.json')}
        autoPlay
        loop
        style={styles.loader}
      />
    </View>
  );
};
