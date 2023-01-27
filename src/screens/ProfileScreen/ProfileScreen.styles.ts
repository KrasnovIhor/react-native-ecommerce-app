import { withTheme } from 'providers/ThemeProvider';

export const useStyles = withTheme(theme => ({
  container: {
    paddingHorizontal: theme.spaces[3],
    paddingTop: theme.spaces[5],
    backgroundColor: theme.colors.background,
    flex: 1,
  },
  scrollView: {
    flex: 1,
    paddingTop: theme.spaces[1],
  },
  updateButton: {
    marginBottom: theme.spaces[3],
  },
}));
