import { withTheme } from 'providers/ThemeProvider';

export const useStyles = withTheme((theme, isDark) => {
  return {
    root: {
      flex: 1,
    },
    card: {
      borderRadius: 5,
      padding: theme.spaces[0],
      backgroundColor: theme.colors.background,
      justifyContent: 'space-between',
      margin: theme.spaces[1],
      flex: 1,
    },
    shadowProps: {
      shadowColor: isDark ? theme.colors.gray100 : '#000',
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
      marginBottom: theme.spaces[0],
    },
    name: {
      ...theme.textStyle,
      marginBottom: theme.spaces[0],
    },
  };
});
