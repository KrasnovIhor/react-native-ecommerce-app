import { DarkTheme, LightTheme } from 'assets/colors/themes';
import React, { PropsWithChildren, useEffect, useMemo, useState } from 'react';
import { useColorScheme, ColorSchemeName } from 'react-native';
import { Theme } from 'types/theme';

export type ThemeContextType = {
  colors: Theme['colors'];
  currentTheme: Theme;
  isDark: boolean;
  setScheme: (scheme: ColorSchemeName) => void;
};

export const ThemeContext = React.createContext<ThemeContextType>({
  colors: LightTheme.colors,
  currentTheme: LightTheme,
  isDark: false,
  setScheme: () => {},
});

export const ThemeProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const colorScheme = useColorScheme();
  const [isDark, setIsDark] = useState(colorScheme === 'dark');

  useEffect(() => {
    setIsDark(colorScheme === 'dark');
  }, [colorScheme]);

  const defaultTheme: ThemeContextType = useMemo(
    () => ({
      currentTheme: isDark ? DarkTheme : LightTheme,
      colors: isDark ? DarkTheme.colors : LightTheme.colors,
      isDark,
      setScheme: scheme => setIsDark(scheme === 'dark'),
    }),
    [isDark]
  );

  return (
    <ThemeContext.Provider value={defaultTheme}>
      {children}
    </ThemeContext.Provider>
  );
};
