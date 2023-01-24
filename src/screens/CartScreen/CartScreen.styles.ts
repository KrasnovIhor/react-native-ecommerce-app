import { ACCENT_GREEN } from 'assets/colors/index';
import { withTheme } from 'providers/ThemeProvider';

export const useStyles = withTheme(theme => ({
  root: {
    justifyContent: 'center',
    flex: 1,
    padding: theme.spaces[2],
    backgroundColor: theme.colors.background,
    paddingBottom: theme.spaces[8],
  },
  main: {
    alignItems: 'center',
    width: '100%',
  },
  scrollView: {
    width: '100%',
    paddingTop: theme.spaces[2],
  },
  personIcon: {
    marginBottom: theme.spaces[2],
  },
  cartIcon: {
    marginBottom: theme.spaces[6],
  },
  title: {
    color: theme.colors.gray500,
    fontSize: theme.fontSize[4],
    fontWeight: '700',
    lineHeight: theme.lineHeight[2],
    marginBottom: theme.spaces[0],
  },
  subTitle: {
    ...theme.textStyle,
    color: theme.colors.gray500,
    marginBottom: theme.spaces[6],
  },
  button: {
    marginBottom: theme.spaces[4],
  },
  textButtonTitle: {
    fontSize: theme.fontSize[2],
    color: theme.colors.primary,
  },
  guardLabelContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
    width: 175,
  },
  guardLabelText: {
    color: ACCENT_GREEN,
    fontSize: 12,
    lineHeight: 12,
    maxWidth: 165,
  },
  guardLabelIcon: {
    marginRight: theme.spaces[1],
  },
  totalPriceCard: {
    marginTop: theme.spaces[0],
    marginBottom: theme.spaces[2],
  },
}));
