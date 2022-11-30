import { withTheme } from 'providers/ThemeProvider';

export const useStyles = withTheme(theme => ({
  container: {
    padding: theme.spaces[1],
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  horizontalRow: {
    paddingHorizontal: theme.spaces[8],
    justifyContent: 'flex-start',
  },
}));
