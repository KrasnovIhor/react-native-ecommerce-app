import { useTheme } from 'providers/ThemeProvider';
import React, { useMemo } from 'react';
import {
  FloatingLabelInput,
  FloatingLabelProps,
} from 'react-native-floating-label-input';
import { useStyles } from './Input.styles';

export interface InputRef {
  focus(): void;
  blur(): void;
}

export const Input = React.memo(
  React.forwardRef<InputRef, FloatingLabelProps>((props, ref) => {
    const theme = useTheme();
    const styles = useStyles();

    const customLabelStyles = useMemo(() => {
      return {
        colorFocused: theme.isDark
          ? theme.colors.gray300
          : theme.colors.gray700,
        colorBlurred: theme.colors.gray500,
        leftBlurred: -4,
        leftFocused: -4,
        fontSizeFocused: 12,
        fontSizeBlurred: 15,
        ...props.customLabelStyles,
      };
    }, [theme, props.customLabelStyles]);

    return (
      <FloatingLabelInput
        ref={ref}
        containerStyles={styles.container}
        labelStyles={styles.label}
        customLabelStyles={customLabelStyles}
        inputStyles={styles.input}
        {...(props || {})}
      />
    );
  })
);
