import { BLACK, WHITE } from 'assets/colors';
import { withTheme } from 'providers/ThemeProvider';

export const useStyles = withTheme((theme, isDark) => {
  return {
    root: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      backgroundColor: theme.colors.primary,
      borderRadius: 4,
      padding: 12,
    },
    container: {
      display: 'flex',
      position: 'absolute',
      bottom: theme.spaces[3],
      left: theme.spaces[3],
      right: theme.spaces[3],
      justifyContent: 'center',
      alignItems: 'center',
    },
    shadowProps: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.3,
      shadowRadius: 4,
      elevation: 4,
    },
    text: {
      ...theme.textStyle,
      color: isDark ? BLACK : WHITE,
      fontWeight: '500',
    },
  };
});
