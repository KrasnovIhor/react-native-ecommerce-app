import { BLACK, NEUTRAL_GRAY } from 'assets/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  input: {
    paddingHorizontal: 0,
    color: BLACK,
    minHeight: 34,
  },
  inputContainer: {
    paddingHorizontal: 14,
    borderWidth: 1,
    borderRadius: 4,
    height: 34,
    borderColor: NEUTRAL_GRAY,
  },
  leftIcon: {
    marginVertical: 0,
    height: 34,
  },
  errorStyle: {
    height: 0,
  },
  container: {
    paddingHorizontal: 0,
    height: 34,
    zIndex: 5,
  },
});
