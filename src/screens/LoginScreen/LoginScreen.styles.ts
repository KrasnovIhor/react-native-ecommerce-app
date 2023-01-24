import { withTheme } from 'providers/ThemeProvider';

export const useStyles = withTheme(theme => ({
  root: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: theme.colors.background,
    padding: theme.spaces[3],
  },
  headingContainer: {
    marginTop: 70,
    marginBottom: 95,
  },
  form: {
    width: '100%',
  },
  heading: {
    fontSize: theme.fontSize[8],
    color: theme.colors.primary,
    lineHeight: theme.lineHeight[6],
    fontWeight: '700',
    textAlign: 'center',
  },
  button: {
    fontWeight: '500',
    fontSize: theme.fontSize[2],
  },
  buttonContainer: {
    ...theme.shadowProps,
    marginBottom: theme.spaces[4],
    alignSelf: 'center',
    width: '100%',
  },
  textButtonTitle: {
    fontSize: theme.fontSize[2],
    color: theme.colors.primary,
    textAlign: 'center',
  },
  floatingButton: {
    backgroundColor: theme.colors.gray500,
    bottom: theme.spaces[5],
  },
  floatingIconButton: {
    marginLeft: theme.spaces[1],
  },
}));
