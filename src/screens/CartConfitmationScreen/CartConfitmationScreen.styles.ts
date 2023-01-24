import { withTheme } from 'providers/ThemeProvider';

export const useStyles = withTheme(theme => ({
  root: {
    backgroundColor: theme.colors.background,
    flex: 1,
    padding: theme.spaces[2],
    justifyContent: 'center',
  },
  main: {
    width: '100%',
    alignItems: 'center',
  },
  mainTitle: {
    fontSize: theme.fontSize[8],
    color: theme.colors.primary,
    fontWeight: '700',
    lineHeight: theme.lineHeight[6],
    maxWidth: 244,
    textAlign: 'center',
    marginBottom: theme.spaces[7],
  },
  icon: {
    marginBottom: theme.spaces[6],
  },
  title: {
    color: theme.colors.gray500,
    fontSize: theme.fontSize[4],
    fontWeight: '700',
    lineHeight: theme.lineHeight[2],
    marginBottom: theme.spaces[0],
    textAlign: 'center',
    maxWidth: 330,
  },
  subTitle: {
    ...theme.textStyle,
    color: theme.colors.gray500,
    marginBottom: theme.spaces[6],
    textAlign: 'center',
    maxWidth: 250,
  },
  lottie: {
    position: 'absolute',
    alignSelf: 'center',
    height: '100%',
    flex: 1,
    zIndex: -1,
  },
}));
