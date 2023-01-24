import { BLACK } from 'assets/colors';
import { withTheme } from 'providers/ThemeProvider';

export const useStyles = withTheme((theme, isDark) => ({
  container: {
    height: 40,
    borderWidth: 1,
    paddingHorizontal: theme.spaces[2],
    borderRadius: 4,
    borderColor: theme.colors.gray500,
    marginBottom: theme.spaces[4],
  },
  label: {
    backgroundColor: theme.colors.background,
    paddingHorizontal: 4,
  },
  input: {
    color: isDark ? theme.colors.gray100 : BLACK,
  },
}));
