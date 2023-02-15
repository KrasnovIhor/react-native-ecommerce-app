import { withTheme } from 'providers/ThemeProvider';

export const useStyles = withTheme(theme => ({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: theme.spaces[3],
  },
  icon: {
    marginRight: theme.spaces[3],
  },
  label: {
    ...theme.textStyle,
  },
}));
