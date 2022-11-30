import { withTheme } from 'providers/ThemeProvider';

export const useStyles = withTheme(theme => ({
  input: {
    ...theme.textStyle,
    paddingHorizontal: 0,
    minHeight: 34,
  },
  inputContainer: {
    paddingHorizontal: theme.spaces[2],
    borderWidth: 1,
    borderRadius: 4,
    height: 34,
    borderColor: theme.colors.gray500,
  },
  leftIcon: {
    marginVertical: 0,
    height: 34,
  },
  errorStyle: {
    height: 0,
  },
  container: {
    paddingHorizontal: 0,
    height: 34,
    zIndex: theme.zIndex[1],
  },
}));
