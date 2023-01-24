import { withTheme } from 'providers/ThemeProvider';

export const useStyles = withTheme((theme, isDark) => {
  return {
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    searchBarContainer: {
      padding: theme.spaces[3],
      backgroundColor: theme.colors.background,
    },
    shadowProps: {
      shadowColor: isDark ? theme.colors.gray100 : '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.3,
      shadowRadius: 4,
      elevation: 4,
    },
  };
});
