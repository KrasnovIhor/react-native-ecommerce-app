import React, { FC } from 'react';
import {
  GestureResponderEvent,
  TouchableOpacity,
  ViewStyle,
  Text,
  TextStyle,
  TouchableOpacityProps,
  View,
} from 'react-native';
import { useStyles } from './FloatingButton.styles';

type FloatingButtonProps = {
  title?: string;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  style?: ViewStyle;
  textStyle?: TextStyle;
  containerStyle?: ViewStyle;
} & TouchableOpacityProps;

export const FloatingButton: FC<FloatingButtonProps> = props => {
  const styles = useStyles();
  const { title, onPress, style, textStyle, containerStyle } = props;

  return (
    <View style={[styles.container, containerStyle]}>
      <TouchableOpacity
        activeOpacity={0.7}
        style={[styles.root, styles.shadowProps, style]}
        onPress={onPress}
        {...(props || {})}>
        <Text style={[styles.text, textStyle]}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};
