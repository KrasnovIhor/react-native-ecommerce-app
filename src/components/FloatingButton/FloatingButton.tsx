import React, { FC, PropsWithChildren } from 'react';
import {
  GestureResponderEvent,
  TouchableOpacity,
  ViewStyle,
  Text,
  TextStyle,
  TouchableOpacityProps,
  View,
  ActivityIndicator,
} from 'react-native';
import { useStyles } from './FloatingButton.styles';

type FloatingButtonProps = {
  title?: string;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  style?: ViewStyle;
  textStyle?: TextStyle;
  containerStyle?: ViewStyle;
  loading?: boolean;
} & TouchableOpacityProps &
  PropsWithChildren;

export const FloatingButton: FC<FloatingButtonProps> = props => {
  const styles = useStyles();
  const { title, onPress, style, textStyle, containerStyle } = props;

  return (
    <View style={[styles.container, containerStyle]}>
      <TouchableOpacity
        {...(props || {})}
        activeOpacity={0.7}
        onPress={onPress}
        style={[styles.root, styles.shadowProps, style]}>
        {props.loading ? (
          <ActivityIndicator size="small" />
        ) : (
          <Text style={[styles.text, textStyle]}>{title}</Text>
        )}
        {props.children}
      </TouchableOpacity>
    </View>
  );
};
