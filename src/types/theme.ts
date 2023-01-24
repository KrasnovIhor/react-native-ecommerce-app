import { TextStyle, ViewStyle } from 'react-native';

export type ListOfColors =
  | 'background'
  | 'primary'
  | 'secondary'
  | 'danger'
  | 'warning'
  | 'success'
  | 'gray700'
  | 'gray500'
  | 'gray300'
  | 'gray100'
  | 'blue500'
  | 'blue300'
  | 'blue200';

type Space5_0 = number;
type Space10_1 = number;
type Space15_2 = number;
type Space20_3 = number;
type Space25_4 = number;
type Space30_5 = number;
type Space35_6 = number;
type Space40_7 = number;
type Space60_8 = number;

export type Theme = {
  colors: {
    [key in ListOfColors]?: string;
  };
  zIndex: [number, number, number, number, number];
  spaces: [
    Space5_0,
    Space10_1,
    Space15_2,
    Space20_3,
    Space25_4,
    Space30_5,
    Space35_6,
    Space40_7,
    Space60_8
  ];
  fontSize: number[];
  lineHeight: number[];
  textStyle: TextStyle;
  shadowProps: ViewStyle;
};
