import React from 'react';
import { ProductsProvider } from 'providers/ProductsProvider';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { MainScreen } from 'screens/MainScreen';
// import { ProductDetailsScreen } from 'screens/ProductDetailsScreen';
import { ThemeProvider } from 'providers/ThemeProvider';

const App = () => {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <ProductsProvider>
          <MainScreen />
          {/* <ProductDetailsScreen /> */}
        </ProductsProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
};
export default App;
