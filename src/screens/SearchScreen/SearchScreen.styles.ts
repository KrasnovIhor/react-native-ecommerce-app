import { withTheme } from 'providers/ThemeProvider';

export const useStyles = withTheme(theme => ({
  container: {
    backgroundColor: theme.colors.background,
    flex: 1,
  },
  searchBarContainer: {
    padding: theme.spaces[3],
    position: 'relative',
    backgroundColor: theme.colors.background,
    ...theme.shadowProps,
  },
}));
