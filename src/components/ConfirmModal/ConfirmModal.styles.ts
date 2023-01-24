import { withTheme } from 'providers/ThemeProvider';
import { ViewStyle } from 'react-native';

const shadowProps: ViewStyle = {
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.3,
  shadowRadius: 4,
  elevation: 4,
};

export const useStyles = withTheme(theme => ({
  root: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.background,
    borderRadius: 5,
    padding: theme.spaces[2],
    minWidth: 335,
  },
  title: {
    color: theme.colors.gray500,
    fontSize: theme.fontSize[4],
    fontWeight: '700',
    marginTop: theme.spaces[0],
  },
  subTitle: {
    color: theme.colors.gray500,
    fontSize: theme.fontSize[2],
    lineHeight: theme.lineHeight[1],
    textAlign: 'center',
    marginBottom: theme.spaces[1],
  },
  buttonsRow: {
    alignItems: 'center',
    marginBottom: theme.spaces[1],
    ...shadowProps,
  },
  button: {
    backgroundColor: theme.colors.primary,
    width: 125,
    alignSelf: 'center',
    marginHorizontal: theme.spaces[1],
  },
  buttonTitle: {
    color: theme.colors.background,
    fontWeight: '500',
    fontSize: theme.fontSize[2],
    lineHeight: theme.lineHeight[0],
  },
}));
