import React from 'react';
import { Input, InputProps } from '@rneui/themed';
import { Input as BaseInput } from '@rneui/base';
import { useStyles } from './SearchBar.styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { GRAY_500 } from 'assets/colors';
import { TextInput, TouchableWithoutFeedback } from 'react-native';

export type RNEInputRef = TextInput & BaseInput;

type SearchBarInputProps = {
  onIconPress?: () => void;
} & InputProps;

export const SearchBar = React.forwardRef<RNEInputRef, SearchBarInputProps>(
  (props, ref) => {
    const styles = useStyles();

    return (
      <Input
        {...(props || {})}
        ref={ref}
        inputContainerStyle={styles.inputContainer}
        inputStyle={styles.input}
        containerStyle={styles.container}
        errorStyle={styles.errorStyle}
        leftIconContainerStyle={styles.leftIcon}
        leftIcon={
          <TouchableWithoutFeedback onPress={props.onIconPress}>
            <Icon name="search" color={GRAY_500} size={25} />
          </TouchableWithoutFeedback>
        }
      />
    );
  }
);

SearchBar.displayName = 'SearchBar';
