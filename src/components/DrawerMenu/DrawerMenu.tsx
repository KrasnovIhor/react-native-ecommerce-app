import React from 'react';
import { DrawerContentComponentProps } from '@react-navigation/drawer';
import { Link } from '@react-navigation/native';
import { Divider } from '@rneui/themed';
import { MENU } from 'constants/menu';
import { Routes } from 'navigation';
import { Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { DrawerMenuItem } from './components/DrawerMenuItem';
import { DrawerMenuSection } from './components/DrawerMenuSection';
import { useStyles } from './DrawerMenu.styles';

type DrawerMenuProps = DrawerContentComponentProps;

export const DrawerMenu: React.FC<DrawerMenuProps> = () => {
  const styles = useStyles();

  return (
    <SafeAreaView style={styles.root}>
      <ScrollView style={styles.root}>
        <Link style={styles.mainTitle} to={`/${Routes.MAIN}`}>
          <Text style={styles.mainTitle}>{MENU.title}</Text>
        </Link>
        <DrawerMenuSection title={MENU.account.title}>
          {MENU.account.items.map(item => (
            <DrawerMenuItem {...item} />
          ))}
        </DrawerMenuSection>
        <Divider style={styles.divider} />
        <DrawerMenuSection
          containerStyle={styles.section}
          title={MENU.support.title}>
          {MENU.support.items.map(item => (
            <DrawerMenuItem {...item} />
          ))}
        </DrawerMenuSection>
        <Divider style={styles.divider} />
        <DrawerMenuSection containerStyle={styles.section}>
          {MENU.footer.items.map(item => (
            <DrawerMenuItem {...item} />
          ))}
        </DrawerMenuSection>
      </ScrollView>
    </SafeAreaView>
  );
};
