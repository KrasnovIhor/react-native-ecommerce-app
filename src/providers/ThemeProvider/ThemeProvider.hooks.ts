import { Theme } from 'types/theme';
import { useContext, useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { ThemeContext } from './ThemeProvider';

export const useTheme = () => useContext(ThemeContext);

export const withTheme =
  <T extends StyleSheet.NamedStyles<T> | StyleSheet.NamedStyles<any>>(
    mapStyles: (theme: Theme, isDark?: boolean) => T
  ) =>
  (): T => {
    const theme = useTheme();

    return useMemo(
      () => StyleSheet.create<T>(mapStyles(theme.currentTheme, theme.isDark)),
      [theme.currentTheme, theme.isDark]
    );
  };
