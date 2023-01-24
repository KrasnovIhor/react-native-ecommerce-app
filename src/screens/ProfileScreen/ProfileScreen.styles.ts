import { withTheme } from 'providers/ThemeProvider';

export const useStyles = withTheme(theme => ({
  container: {
    paddingHorizontal: theme.spaces[3],
    paddingTop: theme.spaces[3],
  },
}));
