import { Text } from 'react-native';
import React from 'react';
import { Routes } from 'navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from 'providers/ThemeProvider';
import { useStyles } from './DrawerMenuItem.styles';
import { DrawerLinkButton } from '../DrawerLinkButton';

type DrawerMenuItemProps = {
  path: Routes;
  label: string;
  iconName: string;
};

export const DrawerMenuItem: React.FC<DrawerMenuItemProps> = ({
  path,
  label,
  iconName,
}) => {
  const theme = useTheme();
  const styles = useStyles();

  return (
    <DrawerLinkButton style={styles.root} to={`/${path}`}>
      <Icon
        style={styles.icon}
        name={iconName}
        color={theme.colors.primary}
        size={25}
      />
      <Text style={styles.label}>{label}</Text>
    </DrawerLinkButton>
  );
};
