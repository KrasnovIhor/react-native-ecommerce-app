import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'stretch',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  horizontalRow: {
    paddingHorizontal: 50,
    justifyContent: 'flex-start',
  },
});
