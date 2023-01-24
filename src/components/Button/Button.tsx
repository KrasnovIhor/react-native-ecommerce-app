import React from 'react';
import {
  Button as RNEButton,
  ButtonProps as RNEButtonProps,
} from '@rneui/themed';
import { useStyles } from './Button.styles';
import { StyleProp, ViewStyle } from 'react-native';
import Animated from 'react-native-reanimated';

type ButtonProps = RNEButtonProps & {
  viewStyle?: StyleProp<ViewStyle>;
};

export const Button: React.FC<ButtonProps> = React.memo(props => {
  const styles = useStyles();

  return (
    <Animated.View style={[styles.root, props.viewStyle]}>
      <RNEButton
        {...(props || {})}
        containerStyle={[styles.container, props.containerStyle]}
        titleStyle={[styles.title, props.titleStyle]}
        buttonStyle={[styles.button, props.buttonStyle]}
      />
    </Animated.View>
  );
});
