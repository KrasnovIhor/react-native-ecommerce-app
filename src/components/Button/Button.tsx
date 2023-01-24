import React from 'react';
import {
  Button as RNEButton,
  ButtonProps as RNEButtonProps,
} from '@rneui/themed';
import { useStyles } from './Button.styles';
import { View, ViewStyle } from 'react-native';

type ButtonProps = RNEButtonProps & {
  viewStyle?: ViewStyle;
};

export const Button: React.FC<ButtonProps> = React.memo(props => {
  const styles = useStyles();

  return (
    <View style={[styles.root, props.viewStyle]}>
      <RNEButton
        {...(props || {})}
        containerStyle={[styles.container, props.containerStyle]}
        titleStyle={[styles.title, props.titleStyle]}
        buttonStyle={[styles.button, props.buttonStyle]}
      />
    </View>
  );
});
