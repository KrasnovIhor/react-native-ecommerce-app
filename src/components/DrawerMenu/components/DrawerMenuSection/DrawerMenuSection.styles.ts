import { withTheme } from 'providers/ThemeProvider';

export const useStyles = withTheme(theme => ({
  root: {
    position: 'relative',
    paddingHorizontal: theme.spaces[3],
  },
  title: {
    fontSize: theme.fontSize[3],
    lineHeight: theme.lineHeight[2],
    color: theme.colors.gray500,
    fontWeight: '700',
    marginBottom: theme.spaces[4],
  },
}));
