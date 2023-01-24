import { withTheme } from 'providers/ThemeProvider';

export const useStyles = withTheme(theme => ({
  card: {
    ...theme.shadowProps,
    paddingTop: theme.spaces[0],
    paddingBottom: theme.spaces[1],
    paddingHorizontal: theme.spaces[1],
    backgroundColor: theme.colors.background,
    borderRadius: 5,
    alignSelf: 'stretch',
    marginHorizontal: theme.spaces[0],
    marginBottom: theme.spaces[2],
    position: 'relative',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonsRow: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  name: {
    ...theme.textStyle,
  },
  color: {
    ...theme.textStyle,
    color: theme.colors.gray500,
  },
  price: {
    fontWeight: '700',
    color: theme.colors.gray500,
  },
  quantity: {
    ...theme.textStyle,
    color: theme.colors.gray500,
    marginHorizontal: theme.spaces[2],
  },
  image: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginBottom: theme.spaces[0],
    marginRight: theme.spaces[1],
  },
  removeButton: {
    position: 'absolute',
    right: 10,
    bottom: 10,
  },
}));
