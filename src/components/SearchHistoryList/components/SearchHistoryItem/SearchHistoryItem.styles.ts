import { withTheme } from 'providers/ThemeProvider';

export const useStyles = withTheme(theme => ({
  root: {
    marginVertical: theme.spaces[0],
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  item: {
    flex: 1,
  },
  clearButton: {
    flex: 1 / 24,
  },
}));
