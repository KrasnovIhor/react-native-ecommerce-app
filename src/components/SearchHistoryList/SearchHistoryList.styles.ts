import { withTheme } from 'providers/ThemeProvider';

export const useStyles = withTheme(theme => ({
  list: {
    backgroundColor: theme.colors.background,
    ...theme.shadowProps,
    paddingHorizontal: theme.spaces[1],
    paddingVertical: theme.spaces[0],
  },
}));
