import { TouchableOpacity, ViewStyle } from 'react-native';
import React, { PropsWithChildren } from 'react';
import { NavigationAction, useLinkProps } from '@react-navigation/native';
import { To } from '@react-navigation/native/lib/typescript/src/useLinkTo';
import { RootStackParamList } from 'navigation';

type DrawerLinkButtonProps = {
  to: To<RootStackParamList>;
  action?: NavigationAction;
  style?: ViewStyle;
};

export const DrawerLinkButton: React.FC<
  DrawerLinkButtonProps & PropsWithChildren
> = ({ to, action, style, children }) => {
  const { onPress, ...props } = useLinkProps({ to, action });
  return (
    <TouchableOpacity style={style} onPress={onPress} {...(props || {})}>
      {children}
    </TouchableOpacity>
  );
};
