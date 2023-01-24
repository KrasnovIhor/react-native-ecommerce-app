import { BLACK } from 'assets/colors';
import { withTheme } from 'providers/ThemeProvider';

export const useStyles = withTheme((theme, isDark) => ({
  root: {
    position: 'relative',
  },
  container: {
    height: 40,
    borderWidth: 1,
    paddingHorizontal: theme.spaces[2],
    borderRadius: 4,
    borderColor: theme.colors.gray500,
    marginBottom: theme.spaces[5],
  },
  label: {
    backgroundColor: theme.colors.background,
    paddingHorizontal: 4,
  },
  input: {
    color: isDark ? theme.colors.gray100 : BLACK,
  },
  errorMessage: {
    ...theme.textStyle,
    position: 'absolute',
    bottom: 10,
    fontSize: theme.fontSize[0],
    color: theme.colors.danger,
  },
}));
