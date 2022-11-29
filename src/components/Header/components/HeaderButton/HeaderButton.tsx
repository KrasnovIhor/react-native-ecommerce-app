import React, { FC } from 'react';
import { GestureResponderEvent } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

type HeaderButtonProps = {
  onPress?: ((event: GestureResponderEvent) => void) & (() => void);
  icon: JSX.Element;
};

export const HeaderButton: FC<HeaderButtonProps> = ({ onPress, icon }) => {
  return <TouchableOpacity onPress={onPress}>{icon}</TouchableOpacity>;
};
