import { withTheme } from 'providers/ThemeProvider';

export const useStyles = withTheme(theme => ({
  root: {
    ...theme.shadowProps,
    width: '100%',
  },
  container: {
    width: '100%',
  },
  button: {
    padding: 12,
    backgroundColor: theme.colors.primary,
  },
  title: {
    fontSize: theme.fontSize[2],
    lineHeight: theme.lineHeight[0],
    color: theme.colors.background,
    fontWeight: '500',
    letterSpacing: 1.25,
  },
}));
