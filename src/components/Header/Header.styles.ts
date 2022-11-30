import { withTheme } from 'providers/ThemeProvider';

export const useStyles = withTheme(theme => {
  return {
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
      color: theme.colors.background,
      fontWeight: '500',
    },
  };
});
