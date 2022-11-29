import { BLUE_300 } from './../../assets/colors/index';
import { DARK_GRAY, WHITE, NEUTRAL_GRAY } from 'assets/colors';
import { StyleSheet, TextStyle } from 'react-native';
const priceText: TextStyle = {
  fontSize: 15,
  lineHeight: 20,
  fontWeight: '700',
};
export const styles = StyleSheet.create({
  card: {
    borderRadius: 5,
    padding: 5,
    backgroundColor: WHITE,
    width: 160,
    display: 'flex',
    justifyContent: 'space-between',
    margin: 10,
    flex: 1,
  },
  shadowProps: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
  },
  image: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginBottom: 5,
  },
  name: {
    fontSize: 15,
    lineHeight: 20,
    marginBottom: 5,
  },
  price: {
    ...priceText,
    color: DARK_GRAY,
    marginRight: 5,
  },
  oldPrice: {
    ...priceText,
    color: NEUTRAL_GRAY,
    marginRight: 5,
    textDecorationStyle: 'solid',
    textDecorationLine: 'line-through',
  },
  comparedPrice: {
    ...priceText,
    color: BLUE_300,
  },
  priceRow: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
});
