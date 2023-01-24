import { withTheme } from 'providers/ThemeProvider';

export const useStyles = withTheme(theme => ({
  root: {
    padding: theme.spaces[0],
    paddingRight: theme.spaces[1],
    paddingBottom: theme.spaces[1],
    ...theme.shadowProps,
    backgroundColor: theme.colors.background,
    marginHorizontal: theme.spaces[0],
    borderRadius: 5,
    position: 'relative',
  },
  title: {
    fontSize: theme.fontSize[4],
    color: theme.colors.gray500,
    lineHeight: theme.lineHeight[2],
    fontWeight: '700',
    marginBottom: theme.spaces[3],
  },
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spaces[1],
  },
  detailsText: {
    ...theme.textStyle,
    color: theme.colors.gray500,
  },
  discountText: {
    ...theme.textStyle,
    color: theme.colors.secondary,
  },
  divider: {
    marginTop: theme.spaces[0],
    marginBottom: theme.spaces[3],
  },
  totalPriceText: {
    ...theme.textStyle,
  },
}));
