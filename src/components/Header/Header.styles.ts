import { WHITE } from 'assets/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  headerContainer: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    elevation: 4,
  },
  headerCenter: {
    fontSize: 20,
    color: WHITE,
    fontWeight: '500',
  },
});
