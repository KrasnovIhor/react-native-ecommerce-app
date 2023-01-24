import React, { PropsWithChildren } from 'react';
import { View, Text, ViewStyle } from 'react-native';
import { useStyles } from './DrawerMenuSection.styles';

type DrawerMenuSectionProps = {
  title?: string;
  containerStyle?: ViewStyle;
};

export const DrawerMenuSection: React.FC<
  DrawerMenuSectionProps & PropsWithChildren
> = ({ children, title, containerStyle }) => {
  const styles = useStyles();

  return (
    <View style={[styles.root, containerStyle]}>
      {title && <Text style={styles.title}>{title}</Text>}
      {children}
    </View>
  );
};
