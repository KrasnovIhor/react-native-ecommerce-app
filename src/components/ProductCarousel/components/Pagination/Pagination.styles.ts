import { withTheme } from 'providers/ThemeProvider';

export const useStyles = withTheme(theme => {
  return {
    root: {
      height: 10,
      display: 'flex',
      flexDirection: 'row',
      marginTop: theme.spaces[6],
    },
    dots: {
      height: 8,
      width: 8,
      backgroundColor: theme.colors.gray300,
      marginHorizontal: theme.spaces[0],
      borderRadius: 4,
    },
    activeDot: {
      backgroundColor: theme.colors.primary,
    },
  };
});
