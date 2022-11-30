import { StyleSheet, ViewStyle } from 'react-native';

const buttonPosition: ViewStyle = {
  position: 'absolute',
  height: '100%',
};

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  slide: {
    height: 250,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    zIndex: 2,
  },
  nextButton: {
    ...buttonPosition,
    right: 0,
  },
  prevButton: {
    ...buttonPosition,
    left: 0,
  },
});
