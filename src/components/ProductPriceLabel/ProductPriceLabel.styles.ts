import { TextStyle } from 'react-native';

import { GRAY_500 } from 'assets/colors';
import { withTheme } from 'providers/ThemeProvider';

export const useStyles = withTheme(theme => {
  const priceText: TextStyle = {
    ...theme.textStyle,
    fontWeight: '700',
  };

  return {
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'row',
    },
    price: {
      ...priceText,
      marginRight: theme.spaces[1],
    },
    oldPrice: {
      ...priceText,
      color: GRAY_500,
      marginRight: theme.spaces[1],
      textDecorationStyle: 'solid',
      textDecorationLine: 'line-through',
    },
    comparedPrice: {
      ...priceText,
      color: theme.colors.secondary,
    },
  };
});
