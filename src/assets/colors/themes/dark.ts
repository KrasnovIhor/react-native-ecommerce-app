import {
  BLACK,
  BLUE_300,
  ACCENT_ORANGE_300,
  ACCENT_GREEN,
  ACCENT_RED,
  GRAY_300,
  GRAY_700,
  GRAY_100,
  GRAY_500,
  WHITE,
  ACCENT_GREEN_DARK,
  BLUE_200,
  BLUE_500,
} from 'assets/colors';
import { Theme } from 'types/theme';

export const DarkTheme: Theme = {
  colors: {
    background: BLACK,
    primary: ACCENT_GREEN_DARK,
    secondary: ACCENT_GREEN,
    warning: ACCENT_ORANGE_300,
    success: ACCENT_GREEN,
    danger: ACCENT_RED,
    gray700: GRAY_700,
    gray500: GRAY_500,
    gray300: GRAY_300,
    gray100: GRAY_100,
    blue500: BLUE_500,
    blue300: BLUE_300,
    blue200: BLUE_200,
  },
  zIndex: [0, 10, 20, 30, 40],
  spaces: [5, 10, 15, 20, 25, 30, 35, 40, 60],
  fontSize: [12, 14, 15, 18, 20, 21, 27, 33, 40],
  lineHeight: [16, 20, 24, 28, 32, 40, 50],
  textStyle: {
    color: WHITE,
    fontSize: 15,
    lineHeight: 20,
  },
  shadowProps: {
    shadowColor: GRAY_100,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
};
