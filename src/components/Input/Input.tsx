import { useTheme } from 'providers/ThemeProvider';
import React, { useMemo } from 'react';
import {
  CustomLabelProps,
  FloatingLabelInput,
  FloatingLabelProps,
} from 'react-native-floating-label-input';
import { useStyles } from './Input.styles';
import * as Animatable from 'react-native-animatable';
import { View } from 'react-native';

export interface InputRef {
  focus(): void;
  blur(): void;
}

type InputProps = FloatingLabelProps & {
  isError?: boolean;
  errorMessage?: string;
};

export const Input = React.memo(
  React.forwardRef<InputRef, InputProps>(
    ({ errorMessage, isError, ...restProps }, ref) => {
      const theme = useTheme();
      const styles = useStyles();

      const customLabelStyles: CustomLabelProps = useMemo(() => {
        return {
          colorFocused: theme.isDark
            ? theme.colors.gray300
            : theme.colors.gray700,
          colorBlurred: theme.colors.gray500,
          leftBlurred: -4,
          leftFocused: -4,
          fontSizeFocused: 12,
          fontSizeBlurred: 15,
          ...restProps.customLabelStyles,
        };
      }, [theme, restProps.customLabelStyles]);

      return (
        <View style={styles.root}>
          <FloatingLabelInput
            ref={ref}
            containerStyles={styles.container}
            labelStyles={styles.label}
            customLabelStyles={customLabelStyles}
            inputStyles={styles.input}
            {...(restProps || {})}
          />
          {isError && (
            <Animatable.Text style={styles.errorMessage} animation="shake">
              {errorMessage}
            </Animatable.Text>
          )}
        </View>
      );
    }
  )
);
