import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from 'providers/ThemeProvider';

import { Provider } from 'react-redux';
import { store } from 'store';

import { AppNavigation } from 'navigation';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <ThemeProvider>
          <NavigationContainer>
            <AppNavigation />
          </NavigationContainer>
        </ThemeProvider>
      </SafeAreaProvider>
    </Provider>
  );
};
export default App;
