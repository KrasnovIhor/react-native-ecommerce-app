import React, { useCallback, useEffect, useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from 'providers/ThemeProvider';

import { Provider } from 'react-redux';
import { store } from 'store';

import { AppNavigation } from 'navigation';
import { NavigationContainer } from '@react-navigation/native';
import { useNetInfo } from '@react-native-community/netinfo';
import { ConfirmModal } from 'components/ConfirmModal';

const App = () => {
  const { isConnected } = useNetInfo();
  const [isVisibleModal, setModalVisible] = useState(false);

  const onClose = useCallback(() => {
    setModalVisible(false);
  }, []);

  useEffect(() => {
    if (isConnected !== null) {
      setModalVisible(!isConnected);
    }
  }, [isConnected]);

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <ThemeProvider>
          <NavigationContainer>
            <AppNavigation />
            <ConfirmModal
              isVisible={isVisibleModal}
              onClose={onClose}
              fromNavigation={false}
              title="Connection Error"
              subTitle="Something wrong with your internet connection! Please try again!"
              iconType="error"
            />
          </NavigationContainer>
        </ThemeProvider>
      </SafeAreaProvider>
    </Provider>
  );
};
export default App;
