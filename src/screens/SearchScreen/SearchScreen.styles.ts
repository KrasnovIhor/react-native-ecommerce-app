import { withTheme } from 'providers/ThemeProvider';

export const useStyles = withTheme(theme => ({
  container: {
    backgroundColor: theme.colors.background,
    flex: 1,
  },
  searchBarContainer: {
    padding: theme.spaces[3],
    position: 'relative',
    zIndex: 99,
    backgroundColor: theme.colors.background,
    ...theme.shadowProps,
  },
  searchHistoryListWrapper: {
    position: 'relative',
    zIndex: 999,
  },
  searchHistoryList: {
    position: 'absolute',
    top: 0,
    borderRadius: 5,
    zIndex: 99,
    left: theme.spaces[3],
    right: theme.spaces[3],
  },
}));
