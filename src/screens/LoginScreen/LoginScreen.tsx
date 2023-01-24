import { Link } from '@react-navigation/native';
import { Button } from 'components/Button';
import { FloatingButton } from 'components/FloatingButton';
import { Input } from 'components/Input';
import { Routes } from 'navigation';
import React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLogin } from './hooks/useLogin';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { WHITE } from 'assets/colors';

export const LoginScreen = () => {
  const {
    styles,
    email,
    password,
    isLoading,
    handleEmailChange,
    handlePasswordChange,
    onSubmitLogin,
    onSkipLoginPress,
  } = useLogin();

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>Ecommerce</Text>
        <Text style={styles.heading}>Store</Text>
      </View>
      <View style={styles.form}>
        <Input
          label="Email Address"
          value={email}
          onChangeText={handleEmailChange}
        />
        <Input
          label="Password"
          isPassword
          value={password}
          onChangeText={handlePasswordChange}
        />
        <View style={styles.buttonContainer}>
          <Button
            title="SIGN IN"
            loading={isLoading}
            titleStyle={styles.button}
            onPress={onSubmitLogin}
          />
        </View>
        <Link style={styles.textButtonTitle} to={`/${Routes.SIGN_UP}`}>
          New here? Sign Up
        </Link>
      </View>
      <FloatingButton
        onPress={onSkipLoginPress}
        style={styles.floatingButton}
        title="SKIP LOGIN">
        <Icon
          style={styles.floatingIconButton}
          name="arrow-forward"
          size={25}
          color={WHITE}
        />
      </FloatingButton>
    </SafeAreaView>
  );
};
