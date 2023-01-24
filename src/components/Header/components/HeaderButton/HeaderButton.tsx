import React, { FC } from 'react';
import {
  GestureResponderEvent,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

type HeaderButtonProps = {
  onPress?: ((event: GestureResponderEvent) => void) & (() => void);
  icon: JSX.Element;
  style?: ViewStyle;
} & TouchableOpacityProps;

export const HeaderButton: FC<HeaderButtonProps> = props => {
  return (
    <TouchableOpacity style={props.style} onPress={props.onPress}>
      {props.icon}
    </TouchableOpacity>
  );
};

HeaderButton.displayName = 'HeaderButton';
