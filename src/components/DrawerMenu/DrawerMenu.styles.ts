import { withTheme } from 'providers/ThemeProvider';

export const useStyles = withTheme(theme => ({
  root: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  mainTitle: {
    color: theme.colors.primary,
    fontSize: theme.fontSize[8],
    fontWeight: '700',
    lineHeight: theme.lineHeight[6],
    marginBottom: 73,
    paddingHorizontal: theme.spaces[3],
  },
  divider: {
    borderBottomColor: theme.colors.gray300,
  },
  section: {
    marginTop: theme.spaces[4],
  },
}));
